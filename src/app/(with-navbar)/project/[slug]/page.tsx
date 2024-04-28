// THIS IS THE OLD BLOG FROM THE OLD WEBSITE
// We're keeping it to not break any external links

import Project from "@/components/pages/project/Project";
import { urlForImage } from "@/sanity/lib/utils";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadProject as loadProjects } from "@/sanity/loader/loadQuery";
import { toPlainText } from "@portabletext/react";
import type { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

const ProjectPreview = dynamic(
	() => import("@/components/pages/home/HomePagePreview"),
);

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { data: pageData } = await loadProjects(params?.slug);
	const description = toPlainText(pageData?.excerpt ?? []) ?? "";

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
	return generateStaticSlugs("project");
}

export default async function ProjectSlugRoute({
	params,
}: { params: { slug: string } }) {
	const initial = await loadProjects(params?.slug);

	if (draftMode().isEnabled) {
		return <ProjectPreview params={params} initial={initial} />;
	}

	if (!initial?.data) {
		notFound();
	}

	return <Project data={initial.data} />;
}
