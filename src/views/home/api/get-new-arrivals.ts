import type { ProductCardProps } from "@/entities/product/ui/product-card/product-card";
import { createClient } from "@/shared/api/server";

export interface ProductItem extends ProductCardProps {
  id: string;
}

export async function getNewArrivals(): Promise<ProductItem[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("new_arrivals")
    .select("id, title, price, old_price, rating, image_url, is_new, discount")
    .order("sort_order", { ascending: true });

  if (error || !data) {
    console.error("Error fetching new arrivals:", error);
    return [];
  }

  return data.map((product) => ({
    id: product.id,
    title: product.title,
    price: Number(product.price),
    oldPrice: product.old_price ? Number(product.old_price) : undefined,
    rating: product.rating,
    image: product.image_url,
    isNew: product.is_new,
    discount: product.discount ?? undefined,
  }));
}
