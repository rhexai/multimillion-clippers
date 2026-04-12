"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createPost(data: {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
}) {
  try {
    const { data: post, error } = await supabase
      .from("Post")
      .insert([
        {
          title: data.title,
          slug: data.slug,
          category: data.category,
          excerpt: data.excerpt,
          content: data.content,
          image: data.image || "/cover.png",
        },
      ])
      .select()
      .single();

    if (error) throw error;

    revalidatePath("/account");
    revalidatePath("/blog");
    return { success: true, post };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

export async function updatePost(
  id: string,
  data: {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    image?: string;
  }
) {
  try {
    const { data: post, error } = await supabase
      .from("Post")
      .update({
        title: data.title,
        slug: data.slug,
        category: data.category,
        excerpt: data.excerpt,
        content: data.content,
        image: data.image || "/cover.png",
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    revalidatePath("/account");
    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);
    return { success: true, post };
  } catch (error) {
    console.error("Error updating post:", error);
    return { success: false, error: "Failed to update post" };
  }
}

export async function deletePost(id: string) {
  try {
    const { error } = await supabase.from("Post").delete().eq("id", id);
    if (error) throw error;

    revalidatePath("/account");
    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, error: "Failed to delete post" };
  }
}

export async function getPosts() {
  try {
    const { data: posts, error } = await supabase
      .from("Post")
      .select("*")
      .order("createdAt", { ascending: false });

    if (error) throw error;
    return posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const { data: post, error } = await supabase
      .from("Post")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;
    return post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}
