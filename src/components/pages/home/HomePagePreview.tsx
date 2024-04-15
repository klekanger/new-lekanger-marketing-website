"use client";

import HomePage from "@/components/pages/home/HomePage";
import {
	frontpageFeatureQuery,
	frontpageHeroQuery,
	frontpageInfoboxQuery,
	frontpageServicesQuery,
	frontpageTestimonialQuery,
	settingsQuery,
} from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import type { HomePagePayload, HomePageProps } from "@/types";
import type { QueryResponseInitial } from "@sanity/react-loader";

type Props = HomePageProps & {
	initial: QueryResponseInitial<HomePagePayload | null>;
};

export default function HomePagePreview(props: any) {
	const { initial } = props;

	function initializeContent<T>(query: string, initialData: T | null = null) {
		return useQuery(
			query,
			{},
			{ initial: initialData as QueryResponseInitial<unknown> },
		);
	}

	const data = {
		settingsContent: initializeContent(
			settingsQuery,
			initial?.data?.settingsContent,
		),
		frontpageHeroContent: initializeContent(
			frontpageHeroQuery,
			initial?.data?.frontpageHeroContent,
		),
		frontpageFeatureContent: initializeContent(
			frontpageFeatureQuery,
			initial?.data?.frontpageFeatureContent,
		),
		frontpageInfoboxContent: initializeContent(
			frontpageInfoboxQuery,
			initial?.data?.frontpageInfoboxContent,
		),
		frontpageServicesContent: initializeContent(
			frontpageServicesQuery,
			initial?.data?.frontpageServicesContent,
		),
		frontpageTestimonialContent: initializeContent(
			frontpageTestimonialQuery,
			initial?.data?.frontpageTestimonialContent,
		),
	};

	if (!data) {
		return (
			<div className="text-center">
				Rediger innholdet for å se forhåndsvisning av forsiden!
			</div>
		);
	}

	return <HomePage data={data as HomePagePayload} />;
}
