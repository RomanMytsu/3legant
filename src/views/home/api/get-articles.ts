import { createClient } from "@/shared/api/server";

export interface Article {
  id: string;
  title: string;
  image: string;
  href: string;
}

export async function getArticles(): Promise<Article[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("id, title, image_url, href")
    .order("sort_order", { ascending: true });

  if (error || !data) {
    console.error("Error fetching articles:", error);
    return [];
  }

  return data.map((article) => ({
    id: article.id,
    title: article.title,
    image: article.image_url,
    href: article.href ?? "#",
  }));
}
