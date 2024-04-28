import Page from "@/components/pages/page/Page";
import { urlForImage } from "@/sanity/lib/utils";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadPage } from "@/sanity/loader/loadQuery";
import { toPlainText } from "@portabletext/react";
import type { Metadata } from "next";
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

	let ogImage = "/images/OG_Kurt Lekanger portrett wide.webp";
	if (pageData && "mainImage" in pageData) {
		ogImage =
			urlForImage(pageData.mainImage)?.width(1200).height(630).url() ?? ogImage;
	}

	return {
		title: `${pageData?.title}`,
		description,
		openGraph: {
			title: pageData?.title || "",
			description,
			images: [ogImage],
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
