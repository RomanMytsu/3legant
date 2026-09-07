import type { SlideItem } from "../ui/hero/hero-slider";
import { createClient } from "@/shared/api/server";

export async function getHeroSlides(): Promise<SlideItem[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("hero_slides")
    .select("id, image_url, alt")
    .order("sort_order", { ascending: true });

  if (error || !data) {
    console.error("Error fetching hero slides:", error);
    return [];
  }

  return data.map((slide) => ({
    id: slide.id,
    src: slide.image_url,
    alt: slide.alt,
  }));
}
