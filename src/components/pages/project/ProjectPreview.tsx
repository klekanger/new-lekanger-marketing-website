"use client";

import { projectsBySlugQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import type { PagePayload } from "@/types";
import Project from "./Project";

export default function PagePreview(props: any) {
	const { params, initial, contactContent } = props;
	const { data } = useQuery<PagePayload | null>(projectsBySlugQuery, params, {
		initial,
	});

	return <Project data={data} />;
}
