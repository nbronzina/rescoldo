import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/temporada", "/territorio", "/equipo"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
