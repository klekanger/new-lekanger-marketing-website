/* import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.lekanger.no";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const slugs = await generateStaticSlugs("page");

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...slugs.map((slug: string) => ({
			url: `${BASE_URL}/page/${slug}`,
			lastModified: new Date(),
			priority: 0.8,
		})),
	];
}
 */
