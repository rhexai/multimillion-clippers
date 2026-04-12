"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createCaseStudy(data: {
  title: string;
  category: string;
  metric: string;
  budget: string;
  image: string;
}) {
  try {
    const { data: caseStudy, error } = await supabase
      .from("CaseStudy")
      .insert([
        {
          title: data.title,
          category: data.category,
          metric: data.metric,
          budget: data.budget,
          image: data.image || "/cover.png",
        },
      ])
      .select()
      .single();

    if (error) throw error;

    revalidatePath("/account");
    revalidatePath("/"); // revalidate landing page FeatureGrid
    return { success: true, caseStudy };
  } catch (error) {
    console.error("Error creating case study:", error);
    return { success: false, error: "Failed to create case study" };
  }
}

export async function updateCaseStudy(
  id: string,
  data: {
    title: string;
    category: string;
    metric: string;
    budget: string;
    image: string;
  }
) {
  try {
    const { data: caseStudy, error } = await supabase
      .from("CaseStudy")
      .update({
        title: data.title,
        category: data.category,
        metric: data.metric,
        budget: data.budget,
        image: data.image || "/cover.png",
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    revalidatePath("/account");
    revalidatePath("/");
    return { success: true, caseStudy };
  } catch (error) {
    console.error("Error updating case study:", error);
    return { success: false, error: "Failed to update case study" };
  }
}

export async function deleteCaseStudy(id: string) {
  try {
    const { error } = await supabase.from("CaseStudy").delete().eq("id", id);
    if (error) throw error;

    revalidatePath("/account");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting case study:", error);
    return { success: false, error: "Failed to delete case study" };
  }
}

export async function getCaseStudies() {
  try {
    const { data: caseStudies, error } = await supabase
      .from("CaseStudy")
      .select("*")
      .order("createdAt", { ascending: false });

    if (error) throw error;
    return caseStudies || [];
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

export async function getCaseStudyById(id: string) {
  try {
    const { data: caseStudy, error } = await supabase
      .from("CaseStudy")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return caseStudy;
  } catch (error) {
    console.error("Error fetching case study by id:", error);
    return null;
  }
}
