import type { MetadataRoute } from "next";

const BASE_URL = "https://rescoldo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/temporada", "/territorio", "/equipo"].map((path) => ({
    url: `${BASE_URL}${path}`,
  }));
}
