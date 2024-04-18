// THIS IS THE OLD BLOG FROM THE OLD WEBSITE
// We're keeping it to not break any external links

import Page from "@/components/pages/page/Page";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";

import { loadProject } from "@/sanity/loader/loadQuery";
import { toPlainText } from "@portabletext/react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { data: pageData } = await loadProject(params?.slug);
	const description = toPlainText(pageData?.excerpt);

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
	return generateStaticSlugs("project");
}

export default async function ProjectSlugRoute({
	params,
}: { params: { slug: string } }) {
	const initial = await loadProject(params?.slug);

	if (!initial?.data) {
		notFound();
	}

	return <Page data={initial.data} />;
}
