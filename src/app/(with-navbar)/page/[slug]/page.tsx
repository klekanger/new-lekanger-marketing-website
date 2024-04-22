import Page from "@/components/pages/page/Page";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadPage } from "@/sanity/loader/loadQuery";
import { toPlainText } from "@portabletext/react";
import type { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
const PagePreview = dynamic(
	() => import("@/components/pages/page/PagePreview"),
);

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { data: pageData } = await loadPage(params?.slug);

	const description = toPlainText(pageData?.overview ?? []) ?? "";

	console.log("pageData", pageData);

	return {
		title: `${pageData?.title}`,
		description,
		openGraph: {
			title: pageData?.title || "",
			description,
			images: ["/images/OG_Kurt Lekanger portrett wide.webp"],
		},
	};
}

export async function generateStaticParams() {
	return generateStaticSlugs("page");
}

export default async function PageSlugRoute({
	params,
}: { params: { slug: string } }) {
	const initial = await loadPage(params?.slug);

	if (draftMode().isEnabled) {
		return <PagePreview params={params} initial={initial} />;
	}

	if (!initial?.data) {
		notFound();
	}

	return <Page data={initial.data} />;
}
