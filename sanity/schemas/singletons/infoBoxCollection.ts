import { CubeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "infobox-collection",
	title: "Forside - informasjons-moduler",
	description: "Moduler til for eksempel forsiden.",
	type: "document",
	icon: CubeIcon,
	fields: [
		defineField({
			name: "components",
			title: "Informasjonsmoduler",
			description:
				"Hver modul inneholder tekst, bilde og annet innhold du vil vise for eksempel på forsiden. Pass på at du ikke har valgt å vise samme modul flere steder. Isåfall er det den første som blir brukt.",
			type: "array",
			of: [{ type: "infobox" }],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Tekst til informasjonsmoduler på forsiden",
			};
		},
	},
});
