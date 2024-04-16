import type {
	FrontFeature,
	FrontHero,
	FrontInfoboxes,
	FrontServices,
	FrontSettings,
	FrontTestimonial,
	PagePayload,
	ProjectPayload,
} from "@/types";
import {
	frontpageFeatureQuery,
	frontpageHeroQuery,
	frontpageInfoboxQuery,
	frontpageServicesQuery,
	frontpageTestimonialQuery,
	pagesBySlugQuery,
	projectsBySlugQuery,
	settingsQuery,
} from "../lib/queries";
import { loadQuery } from "../lib/store";

export async function loadHomePage() {
	const [
		settingsContent,
		frontpageHeroContent,
		frontpageFeatureContent,
		frontpageInfoboxContent,
		frontpageServicesContent,
		frontpageTestimonialContent,
	] = await Promise.all([
		loadQuery<FrontSettings>(
			settingsQuery,
			{},
			{ next: { tags: ["settings"] } },
		),
		loadQuery<FrontHero>(
			frontpageHeroQuery,
			{},
			{ next: { tags: ["frontpage-hero"] } },
		),
		loadQuery<FrontFeature>(
			frontpageFeatureQuery,
			{},
			{ next: { tags: ["frontpage-feature", "feature-box"] } },
		),
		loadQuery<FrontInfoboxes>(
			frontpageInfoboxQuery,
			{},
			{ next: { tags: ["infobox-collection", "infobox"] } },
		),
		loadQuery<FrontServices>(
			frontpageServicesQuery,
			{},
			{ next: { tags: ["frontpage-services"] } },
		),
		loadQuery<FrontTestimonial>(
			frontpageTestimonialQuery,
			{},
			{ next: { tags: ["frontpage-testimonial"] } },
		),
	]);

	return {
		data: {
			settingsContent,
			frontpageHeroContent,
			frontpageFeatureContent,
			frontpageInfoboxContent,
			frontpageServicesContent,
			frontpageTestimonialContent,
		},
	};
}

export async function loadPage(slug: string) {
	return loadQuery<PagePayload>(
		pagesBySlugQuery,
		{ slug },
		{ next: { tags: [`page:${slug}`] } },
	);
}

export async function loadProject(slug: string) {
	return loadQuery<ProjectPayload>(
		projectsBySlugQuery,
		{ slug },
		{ next: { tags: [`project:${slug}`] } },
	);
}
