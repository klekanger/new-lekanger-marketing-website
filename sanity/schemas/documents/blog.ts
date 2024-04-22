import { DocumentIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "blog",
	title: "Blogg-artikkel",
	icon: DocumentIcon,
	fields: [
		defineField({
			type: "string",
			name: "title",
			title: "Tittel",
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "slug",
			name: "slug",
			title: "Slug",
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
			type: "array",
			name: "body",
			title: "Brødtekst",
			description:
				"Her skriver du inn hovedteksten som skal vises i artikkelen.",
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
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "Quote", value: "blockquote" },
					],
					lists: [{ title: "Punktliste", value: "bullet" }],
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
				subtitle: "Artikkel",
				title,
			};
		},
	},
});
