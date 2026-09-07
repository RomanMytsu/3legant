import { createClient } from "@/shared/api/server";
import { Route } from "next";

export interface BannerCard {
  id: string;
  title: string;
  linkHref: Route;
  imageUrl: string;
  alt: string;
  variant: "large" | "small";
}

export async function getBanners(): Promise<BannerCard[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("category_banners")
    .select("id, title, link_href, image_url, alt, variant")
    .order("sort_order", { ascending: true });

  if (error || !data) {
    console.error("Error fetching category banners:", error);
    return [];
  }

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    linkHref: item.link_href,
    imageUrl: item.image_url,
    alt: item.alt,
    variant: item.variant as "large" | "small",
  }));
}
