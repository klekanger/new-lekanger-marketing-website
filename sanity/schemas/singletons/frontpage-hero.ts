import { CubeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "frontpage-hero",
	type: "document",
	title: "Forside - hero-seksjon",
	icon: CubeIcon,
	fields: [
		defineField({
			name: "title",
			type: "text",
			title: "Stor tittel",
			description: "Tittelen som skal vises i Hero-seksjonen på forsiden.",
		}),
		defineField({
			name: "subtitle",
			type: "string",
			title: "Undertittel",
			description: "Vises under hovedtittelen. Kan være blank.",
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Hero-seksjon",
			};
		},
	},
});
