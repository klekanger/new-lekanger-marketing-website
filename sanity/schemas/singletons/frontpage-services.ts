import { CubeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "frontpage-services",
	type: "document",
	title: "Forside - tjenestemodul",
	icon: CubeIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Tittel",
			description: "Tittel over modulene som beskriver tjenestene på forsiden.",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "modules",
			type: "array",
			title: "Innholdsmoduler",
			description: "Innholdsmodul med tekst",
			of: [{ type: "content-module" }],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Endre innhold i modulen som viser alle tjenestene",
			};
		},
	},
});
