"use client";

import { pagesBySlugQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import type { PagePayload } from "@/types";
import Page from "./Page";

export default function PagePreview(props: any) {
	const { params, initial, contactContent } = props;
	const { data } = useQuery<PagePayload | null>(pagesBySlugQuery, params, {
		initial,
	});

	return <Page data={data} />;
}
