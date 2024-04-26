import { CheckmarkIcon, DocumentIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "page",
	title: "Side",
	icon: DocumentIcon,
	fields: [
		defineField({
			type: "string",
			name: "title",
			title: "Tittel",
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "string",
			name: "subtitle",
			title: "Undertittel",
		}),
		defineField({
			type: "slug",
			name: "slug",
			title: "Slug",
			description:
				"Slug er det som kommer i slutten av URL-en. For eksempel 'about-us' i URL-en 'ekstrahjelp1.no/page/about-us'. Oppgis uten '/page/' eller lignende.",
			options: {
				source: "title",
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "overview",
			description:
				"Brukes som ingress og for <meta>-beskrivelses-tagen for SEO.",
			title: "Ingress",
			type: "array",
			of: [
				// Paragraphs
				defineArrayMember({
					lists: [],
					marks: {
						annotations: [],
						decorators: [
							{
								title: "Kursiv",
								value: "em",
							},
							{
								title: "Fet skrift",
								value: "strong",
							},
						],
					},
					styles: [],
					type: "block",
				}),
			],
			validation: (rule) => rule.max(155).required(),
		}),
		defineField({
			type: "image",
			name: "mainImage",
			title: "Hovedbilde",
			description: "Bildet som vises øverst på siden.",
			options: {
				hotspot: true,
			},
			fields: [
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
			type: "array",
			name: "body",
			title: "Brødtekst",
			description: "Her skriver du inn teksten som skal vises på siden.",
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
												allowRelative: true,
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
					lists: [
						{ title: "Punktliste", value: "bullet" },
						{ title: "Nummerert liste", value: "number" },
						{
							title: "Hakeliste",
							value: "checkmark",
							icon: CheckmarkIcon,
							component: (props) => (
								<span className="flex items-center">
									<span contentEditable={false}>☑ </span>
									{props.children}
								</span>
							),
						},
					],
				}),
				// Custom blocks

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
					type: "youtube",
					name: "YouTube",
					description: "Sett inn YouTube-video.",
				}),
				defineField({
					type: "twitter",
					name: "Twitter",
					description: "Sett inn Twitter-tweet.",
				}),
				defineField({
					type: "code",
					name: "code",
					title: "Sett inn kodesnutt",
					options: {
						language: "javascript",
					},
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title }) {
			return {
				subtitle: "Side",
				title,
			};
		},
	},
});
