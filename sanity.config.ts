import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";
import blog from "./sanity/schemas/documents/blog";
import page from "./sanity/schemas/documents/page";
import author from "./sanity/schemas/legacy/author";
import bioPortableText from "./sanity/schemas/legacy/bioPortableText";
import category from "./sanity/schemas/legacy/category";
import figure from "./sanity/schemas/legacy/figure";
import project from "./sanity/schemas/legacy/project";
import projectPortableText from "./sanity/schemas/legacy/projectPortableText";
import simplePortableText from "./sanity/schemas/legacy/simplePortableText";
import contentModule from "./sanity/schemas/objects/content-module";
import featureBox from "./sanity/schemas/objects/feature-box";
import infoBox from "./sanity/schemas/objects/infoBox";
import { twitter } from "./sanity/schemas/objects/twitter";
import { youtube } from "./sanity/schemas/objects/youtube";
import frontpageFeature from "./sanity/schemas/singletons/frontpage-feature";
import frontpageHero from "./sanity/schemas/singletons/frontpage-hero";
import frontPageServices from "./sanity/schemas/singletons/frontpage-services";
import testimonial from "./sanity/schemas/singletons/frontpage-testimonial";
import infoBoxCollection from "./sanity/schemas/singletons/infoBoxCollection";
import settings from "./sanity/schemas/singletons/settings";

export default defineConfig({
	title: `Lekanger.no [dataset: ${dataset}]`,
	basePath: "/studio",
	projectId,
	dataset,
	schema: {
		types: [
			// Singletons
			settings,
			infoBoxCollection,
			frontPageServices,
			testimonial,
			frontpageFeature,
			frontpageHero,

			// Objects
			youtube,
			twitter,
			contentModule,
			featureBox,
			infoBox,

			// Documents
			blog,
			page,

			// Legacy - keep until migrated
			project,
			author,
			bioPortableText,
			figure,
			category,
			simplePortableText,
			projectPortableText,
		],
	},
	plugins: [
		structureTool({
			title: "Innhold",
			structure: pageStructure([
				settings,
				frontpageHero,
				infoBoxCollection,
				frontPageServices,
				testimonial,
				frontpageFeature,
			]),
		}),
		singletonPlugin([
			settings.name,
			infoBoxCollection.name,
			frontPageServices.name,
			testimonial.name,
			frontpageFeature.name,
			frontpageHero.name,
		]),
		presentationTool({
			title: "Forhåndsvisning",
			previewUrl: {
				draftMode: {
					enable: "/api/draft",
				},
			},
		}),
		visionTool({ defaultApiVersion: apiVersion }),
		codeInput(),
	],
});
