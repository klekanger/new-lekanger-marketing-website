import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.lekanger.no";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const pageSlugs = await generateStaticSlugs("page");
	const blogSlugs = await generateStaticSlugs("blog");
	const projectSlugs = await generateStaticSlugs("project");

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},

		...pageSlugs.map((slug: string) => ({
			url: `${BASE_URL}/page/${slug}`,
			lastModified: new Date(),
			priority: 0.8,
		})),
		...blogSlugs.map((slug: string) => ({
			url: `${BASE_URL}/blog-page/${slug}`,
			lastModified: new Date(),
			priority: 0.8,
		})),
		...projectSlugs.map((slug: string) => ({
			url: `${BASE_URL}/project/${slug}`,
			lastModified: new Date(),
			priority: 0.8,
		})),
		{
			url: `${BASE_URL}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
	];
}
