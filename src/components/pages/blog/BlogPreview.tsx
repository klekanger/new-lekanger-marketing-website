"use client";

import { blogsBySlugQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import type { PagePayload } from "@/types";
import Blog from "./Blog";

export default function BlogPreview(props: any) {
	const { params, initial, contactContent } = props;
	const { data } = useQuery<PagePayload | null>(blogsBySlugQuery, params, {
		initial,
	});

	return (
		<>
			<h1>HALLO</h1>
			<Blog data={data} />
		</>
	);
}
