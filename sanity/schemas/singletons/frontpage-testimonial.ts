import { CubeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "frontpage-testimonial",
	type: "document",
	title: "Forside - sitatboks",
	icon: CubeIcon,
	fields: [
		defineField({
			name: "showQuote",
			type: "boolean",
			title: "Vis sitatboks for forsiden.",
		}),
		defineField({
			name: "quote",
			type: "text",
			title: "Sitat",
			description: "Sitatet som skal vises på forsiden.",
		}),
		defineField({
			name: "author",
			type: "string",
			title: "Forfatter",
			description:
				"Forfatter som skal vises under sitatboksen. Kan være blank.",
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Sitatboks",
			};
		},
	},
});
