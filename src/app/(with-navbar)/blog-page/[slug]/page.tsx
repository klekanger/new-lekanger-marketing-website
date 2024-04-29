import Blog from "@/components/pages/blog/Blog";
import { urlForImage } from "@/sanity/lib/utils";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadBlog } from "@/sanity/loader/loadQuery";
import { toPlainText } from "@portabletext/react";
import type { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

const BlogPreview = dynamic(
	() => import("@/components/pages/page/PagePreview"),
);

type Props = {
	params: { slug: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { data: pageData } = await loadBlog(params?.slug);

	const description = toPlainText(pageData?.overview ?? []) ?? "";

	let ogImage = "/images/OG_Kurt Lekanger portrett wide.webp";
	if (pageData && "mainImage" in pageData) {
		ogImage =
			urlForImage(pageData.mainImage)?.width(1200).height(630).url() ?? ogImage;
	}

	return {
		title: `${pageData?.title}`,
		description,
		openGraph: {
			title: pageData?.title,
			description,
			images: [ogImage],
		},
	};
}

export async function generateStaticParams() {
	return generateStaticSlugs("blog");
}

export default async function BlogSlugRoute({
	params,
}: { params: { slug: string } }) {
	const initial = await loadBlog(params?.slug);

	if (draftMode().isEnabled) {
		return <BlogPreview params={params} initial={initial} />;
	}

	if (!initial?.data) {
		notFound();
	}

	return <Blog data={initial.data} />;
}
