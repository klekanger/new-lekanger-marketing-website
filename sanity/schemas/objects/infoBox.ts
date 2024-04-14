import { image } from "@nextui-org/react";
import { ComponentIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const WHERE_TO_SHOW_OPTIONS = [
	{ title: "Forsidemodul 1", value: "frontpage1" },
	{ title: "Forsidemodul 2", value: "frontpage2" },
	{ title: "Forsidemodul 3", value: "frontpage3" },
];

export default defineType({
	type: "object",
	name: "infobox",
	title: "Informasjonsmodul",
	icon: ComponentIcon,
	fieldsets: [
		{
			name: "content",
			title: "Hovedinnholdet i modulen",
		},
		{
			name: "button",
			title: "Knapp til modulen",
		},
	],
	fields: [
		defineField({
			type: "string",
			name: "title",
			title: "Tittel",
			validation: (rule) => rule.required(),
			fieldset: "content",
		}),
		defineField({
			type: "string",
			name: "whereToShow",
			title: "Hvor skal modulen vises?",

			description:
				"Velg hvor innholdet skal vises. Pass på at du ikke har valgt å vise samme module flere steder.",

			options: {
				list: WHERE_TO_SHOW_OPTIONS,
				layout: "dropdown",
			},
		}),
		defineField({
			type: "array",
			name: "body",
			title: "Tekst som skal vises i modulen",

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
										validation: (Rule) =>
											Rule.uri({
												scheme: ["http", "https", "mailto", "tel"],
											}),
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
				// Custom blocks
			],
			fieldset: "content",
		}),
		defineField({
			type: "image",
			icon: ImageIcon,
			name: "image1",
			title: "Bilde til modulen",
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
			fieldset: "content",
		}),
		defineField({
			type: "boolean",
			name: "showButton",
			title: "Vis 'call to action'-knapp",
			fieldset: "button",
		}),
		defineField({
			type: "string",
			name: "buttonText",
			title: "Tekst til knapp",
			fieldset: "button",
		}),
		defineField({
			type: "url",
			name: "buttonHref",
			title: "URL knappen skal lenke til",
			description: "Eksempel: /om-oss eller https://lekanger.no",
			fieldset: "button",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
					allowRelative: true,
				}).error("Du må skrive inn en gyldig URL."),
		}),
	],

	preview: {
		select: {
			title: "title",
			selectedModule: "whereToShow",
			image: "image1",
		},
		prepare(selection) {
			const { title, selectedModule, image } = selection;
			const moduleTitle =
				selectedModule &&
				WHERE_TO_SHOW_OPTIONS.flatMap((option) =>
					option.value === selectedModule ? [option.title] : [],
				);

			return {
				title,
				subtitle: `Vises i: ${moduleTitle || "Ingen"}`,
				media: image,
			};
		},
	},
});
