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

/* export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { data: pageData } = await loadProject(params?.slug);
	const description = pageData?.excerpt
		? toPlainText(pageData?.overview)
		: (await parent).description;

	return {
		title: `${pageData?.title}`,
		description,
		openGraph: {
			title: pageData?.title,
			description,
			images: ["/images/ekstrahjelp1-og-image.jpg"],
		},
	};
}
 */
export async function generateStaticParams() {
	return generateStaticSlugs("page");
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
