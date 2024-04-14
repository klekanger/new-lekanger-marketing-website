import { ImageIcon, SparkleIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	type: "object",
	name: "content-module",
	title: "Innholds-modul",
	icon: SparkleIcon,
	fields: [
		defineField({
			type: "string",
			name: "title",
			title: "Tittel",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			type: "array",
			name: "moduleText",
			title: "Tekst som skal vises i innholdsmodulen",
			description:
				"Her skriver du inn teksten som skal vises. Du kan formatere teksten med for eksempel fet eller kursiv skrift, punktlister, osv.",
			of: [
				// Paragraphs
				defineArrayMember({
					type: "block",

					marks: {
						annotations: [
							{
								name: "link",
								type: "object",
								title: "Lenke",
								fields: [
									{
										name: "href",
										type: "url",
										title: "Url",
									},
								],
							},
						],
					},
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H2 - Ekstra stor", value: "h2" },
						{ title: "H3 - Stor", value: "h3" },
						{ title: "H4 - Middels", value: "h4" },
						{ title: "Sitat", value: "blockquote" },
					],
					lists: [{ title: "Punktliste", value: "bullet" }],
				}),
			],
		}),
		defineField({
			type: "image",
			icon: ImageIcon,
			name: "image",
			title: "Bilde",
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					title: "Bildetekst",
					name: "caption",
					type: "string",
				}),
				defineField({
					name: "alt",
					type: "string",
					title: "Alt-tekst",
					description:
						"Alternativ tekst til bildet, for tilgjengelighet for blinde og svaksynte.",
				}),
			],
		}),
		defineField({
			type: "reference",
			name: "moduleLink",
			title: "Siden klikk på modulen skal føre til",
			to: [{ type: "page" }],
		}),
		defineField({
			type: "url",
			name: "altModuleLinkText",
			title: "Alternativ lenke modulen skal lenke til.",
			description:
				"Hvis du ønsker å lenke til et annet sted enn en publisert side. For eksempel en ekstern URL.",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
					allowRelative: true,
				}).error("Du må skrive inn en gyldig URL."),
		}),
		defineField({
			type: "boolean",
			name: "useAltLink",
			title: "Bruk alternativ lenke",
		}),
	],
});
