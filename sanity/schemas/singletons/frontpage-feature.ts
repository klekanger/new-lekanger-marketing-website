import { CubeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "frontpage-feature",
	type: "document",
	title: "Forside - 'feature'-modul",
	icon: CubeIcon,
	fields: [
		defineField({
			name: "showQuote",
			type: "boolean",
			title: "Vis feature-modul på forsiden.",
		}),
		defineField({
			name: "title",
			type: "string",
			title: "Tittel",
			description: "Stor tittel",
		}),
		defineField({
			name: "subtitle",
			type: "string",
			title: "Undertittel",
		}),
		defineField({
			name: "bodytext",
			type: "text",
			title: "Teksten som skal vises øverst.",
		}),
		defineField({
			name: "featureboxes",
			type: "array",
			title:
				"Tekst til innholdsbokser. Du kan ha maksimalt 4 bokser, og det anbefales å velge 2 eller 4 for penest visning på alle skjermstørrelser.",
			of: [{ type: "feature-box" }],
			validation: (rule) =>
				rule.max(4).error("Du kan ha maksimalt 4 innholdsbokser"),
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Feature-modul",
			};
		},
	},
});
