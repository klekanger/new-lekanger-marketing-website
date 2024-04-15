import Page from "@/components/pages/page/Page";
import { generateStaticSlugs } from "@/sanity/loader/generateStaticSlugs";
import { loadPage } from "@/sanity/loader/loadQuery";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return generateStaticSlugs("page");
}

export default async function PageSlugRoute({
	params,
}: { params: { slug: string } }) {
	const initial = await loadPage(params?.slug);

	if (!initial?.data) {
		notFound();
	}

	return <Page data={initial.data} />;
}
