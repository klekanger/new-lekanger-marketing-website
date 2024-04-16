import { ContentSourceMap } from "next-sanity";
import type { Image, PortableTextBlock } from "sanity";
import {
	ProjectPortableText,
	internalGroqTypeReferenceTo,
} from "../sanity.types";

export type Slug = {
	_type: "slug";
	current?: string;
	source?: string;
};

export type FrontSettings = {
	_id: string;
	companyName?: string;
	addressLine1?: string;
	addressLine2?: string;
	companyDescription?: string;
	phone?: string;
	email?: string;
	organisationNumber?: string;
	metaTitle?: string;
	metaDescription?: string;
	metaKeywords?: string;
	metaOgImage: Image;
	showContactButton?: boolean;
};

export type FrontHero = {
	_id: string;
	title: string | null;
	subtitle: string | null;
};

export type FeatureBox = {
	title?: string;
	moduleText?: Array<PortableTextBlock>;
};

export type FrontFeature = {
	_id: string;
	showQuote?: boolean;
	title?: string;
	subtitle?: string;
	bodytext?: string;
	featureboxes?: Array<
		{
			_key: string;
		} & FeatureBox
	>;
};

export type Infobox = {
	title?: string;
	whereToShow?: "frontpage1" | "frontpage2" | "frontpage3";
	body?: Array<PortableTextBlock>;
	image1?: Image;
	showButton?: boolean;
	buttonText?: string;
	buttonHref?: string;
};

export type FrontInfoboxes = {
	_id: string;
	components?: Array<
		{
			_key: string;
		} & Infobox
	>;
};

export type ContentModule = {
	title?: string;
	moduleText?: Array<PortableTextBlock>;
	image?: Image;
	moduleLink?: any;
	altModuleLinkText?: string;
	useAltLink?: boolean;
};

export type FrontServices = {
	_id: string;
	title?: string;
	modules?: Array<
		{
			_key: string;
		} & ContentModule
	>;
};

export type FrontTestimonial = {
	_id: string;
	showQuote?: boolean;
	quote?: string;
	author?: string;
};

export type HomePagePayload = {
	settingsContent: { data: FrontSettings };
	frontpageHeroContent: { data: FrontHero };
	frontpageFeatureContent: { data: FrontFeature };
	frontpageInfoboxContent: { data: FrontInfoboxes };
	frontpageServicesContent: { data: FrontServices };
	frontpageTestimonialContent: { data: FrontTestimonial };
};

export type HomePageProps = {
	data: HomePagePayload;
};

export type HeroProps = {
	data: FrontHero;
};

export type InfoSectionProps = {
	data: FrontInfoboxes;
	component?: string;
};

export type FrontPageServicesProps = {
	data: FrontServices;
};

export type SanityReference = {
	_type: string;
	_ref: string;
};

export type PagePayload = {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	title: string;
	overview: PortableTextBlock[];
	body: PortableTextBlock[];
	slug: Slug;
};
export type ProjectPayload = {
	mainImage: Image & { alt: string };
	excerpt: PortableTextBlock[];
	slug: Slug;
	title: string;
	_createdAt: string;
	_updatedAt: string;
	_id: string;
	body: ProjectPortableText;
};

export type PageProps = {
	data?: PagePayload | ProjectPayload | null;
};

export type ProjectProps = {
	data?: ProjectPayload;
};

export type ResponsiveImageProps = {
	imageData: SanityReference;
	alt?: string;
	className?: string;
};

export type FigureProps = {
	value: {
		alt?: string;
		caption?: string;
		asset: SanityReference;
		_key: string;
		_type: string;
	};
};

export type CodeBlockProps = {
	value: {
		code: string;
		language?: string;
	};
};
