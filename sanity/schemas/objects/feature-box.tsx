import { SparkleIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	type: "object",
	name: "feature-box",
	title: "Tekst til innholdsbokser i feature-modul",
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
	],
});
