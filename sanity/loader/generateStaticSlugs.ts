import { groq } from "next-sanity";
import { client } from "../lib/client";
import { token } from "../lib/token";

// Used in `generateStaticParams`
export function generateStaticSlugs(type: string) {
	// Not using loadQuery as it's optimized for fetching in the RSC lifecycle
	return client
		.withConfig({
			token,
			perspective: "published",
			useCdn: false,
			stega: false,
		})
		.fetch<string[]>(
			groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
			{ type },
			{
				next: {
					tags: [type],
				},
			},
		);
}
