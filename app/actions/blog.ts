"use server";

import { prisma } from "@/lib/prisma";
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
    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        category: data.category,
        excerpt: data.excerpt,
        content: data.content,
        image: data.image || "/cover.png",
      },
    });
    revalidatePath("/account");
    revalidatePath("/blog");
    return { success: true, post };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

export async function updatePost(id: string, data: {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
}) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        category: data.category,
        excerpt: data.excerpt,
        content: data.content,
        image: data.image || "/cover.png",
      },
    });
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
    const post = await prisma.post.delete({
      where: { id },
    });
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
    return await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await prisma.post.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}
