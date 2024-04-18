import Page from "@/components/pages/page/Page";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadBlogs } from "@/sanity/loader/loadQuery";
import { toPlainText } from "@portabletext/react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { data: pageData } = await loadBlogs(params?.slug);
	const description = toPlainText(pageData?.overview);

	return {
		title: `${pageData?.title}`,
		description,
		openGraph: {
			title: pageData?.title,
			description,
			images: ["/images/OG_Kurt Lekanger portrett wide.webp"],
		},
	};
}

export async function generateStaticParams() {
	return generateStaticSlugs("blog");
}

export default async function BlogSlugRoute({
	params,
}: { params: { slug: string } }) {
	const initial = await loadBlogs(params?.slug);

	if (!initial?.data) {
		notFound();
	}

	return <Page data={initial.data} />;
}
