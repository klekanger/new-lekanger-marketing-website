/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
	_type: "sanity.imagePaletteSwatch";
	background?: string;
	foreground?: string;
	population?: number;
	title?: string;
};

export type SanityImagePalette = {
	_type: "sanity.imagePalette";
	darkMuted?: SanityImagePaletteSwatch;
	lightVibrant?: SanityImagePaletteSwatch;
	darkVibrant?: SanityImagePaletteSwatch;
	vibrant?: SanityImagePaletteSwatch;
	dominant?: SanityImagePaletteSwatch;
	lightMuted?: SanityImagePaletteSwatch;
	muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
	_type: "sanity.imageDimensions";
	height?: number;
	width?: number;
	aspectRatio?: number;
};

export type SanityFileAsset = {
	_id: string;
	_type: "sanity.fileAsset";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	source?: SanityAssetSourceData;
};

export type Geopoint = {
	_type: "geopoint";
	lat?: number;
	lng?: number;
	alt?: number;
};

export type ProjectPortableText = Array<
	| {
			children?: Array<{
				marks?: Array<string>;
				text?: string;
				_type: "span";
				_key: string;
			}>;
			style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
			listItem?: "bullet";
			markDefs?: Array<{
				href?: string;
				_type: "link";
				_key: string;
			}>;
			level?: number;
			_type: "block";
			_key: string;
	  }
	| {
			asset?: {
				_ref: string;
				_type: "reference";
				_weak?: boolean;
				[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
			};
			hotspot?: SanityImageHotspot;
			crop?: SanityImageCrop;
			caption?: string;
			alt?: string;
			_type: "figure";
			_key: string;
	  }
	| ({
			_key: string;
	  } & Code)
	| ({
			_key: string;
	  } & Youtube)
	| ({
			_key: string;
	  } & Twitter)
>;

export type SimplePortableText = Array<{
	children?: Array<{
		marks?: Array<string>;
		text?: string;
		_type: "span";
		_key: string;
	}>;
	style?: "normal";
	listItem?: never;
	markDefs?: null;
	level?: number;
	_type: "block";
	_key: string;
}>;

export type Category = {
	_id: string;
	_type: "category";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	description?: string;
};

export type BioPortableText = Array<{
	children?: Array<{
		marks?: Array<string>;
		text?: string;
		_type: "span";
		_key: string;
	}>;
	style?: "normal";
	listItem?: never;
	markDefs?: Array<{
		href?: string;
		_type: "link";
		_key: string;
	}>;
	level?: number;
	_type: "block";
	_key: string;
}>;

export type Author = {
	_id: string;
	_type: "author";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	image?: {
		asset?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: "image";
	};
	bio?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: "span";
			_key: string;
		}>;
		style?: "normal";
		listItem?: never;
		markDefs?: Array<{
			href?: string;
			_type: "link";
			_key: string;
		}>;
		level?: number;
		_type: "block";
		_key: string;
	}>;
};

export type Project = {
	_id: string;
	_type: "project";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	publishedAt?: string;
	pinned?: boolean;
	excerpt?: SimplePortableText;
	author?: Array<{
		_ref: string;
		_type: "reference";
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: "author";
	}>;
	mainImage?: {
		asset?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		caption?: string;
		alt?: string;
		_type: "figure";
	};
	categories?: Array<{
		_ref: string;
		_type: "reference";
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: "category";
	}>;
	body?: ProjectPortableText;
	relatedProjects?: Array<{
		_ref: string;
		_type: "reference";
		_weak?: boolean;
		_key: string;
		[internalGroqTypeReferenceTo]?: "project";
	}>;
	keywords?: Array<string>;
};

export type Figure = {
	_type: "figure";
	asset?: {
		_ref: string;
		_type: "reference";
		_weak?: boolean;
		[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
	};
	hotspot?: SanityImageHotspot;
	crop?: SanityImageCrop;
	caption?: string;
	alt?: string;
};

export type Blog = {
	_id: string;
	_type: "blog";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	overview?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: "span";
			_key: string;
		}>;
		style?: "normal";
		listItem?: never;
		markDefs?: null;
		level?: number;
		_type: "block";
		_key: string;
	}>;
	body?: Array<
		| {
				children?: Array<{
					marks?: Array<string>;
					text?: string;
					_type: "span";
					_key: string;
				}>;
				style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
				listItem?: "bullet";
				markDefs?: Array<{
					href?: string;
					_type: "link";
					_key: string;
				}>;
				level?: number;
				_type: "block";
				_key: string;
		  }
		| {
				asset?: {
					_ref: string;
					_type: "reference";
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				caption?: string;
				alt?: string;
				_type: "image";
				_key: string;
		  }
	>;
};

export type Infobox = {
	_type: "infobox";
	title?: string;
	whereToShow?: "frontpage1" | "frontpage2" | "frontpage3";
	body?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: "span";
			_key: string;
		}>;
		style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
		listItem?: "bullet";
		markDefs?: Array<{
			href?: string;
			_type: "link";
			_key: string;
		}>;
		level?: number;
		_type: "block";
		_key: string;
	}>;
	image1?: {
		asset?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		caption?: string;
		alt?: string;
		_type: "image";
	};
	showButton?: boolean;
	buttonText?: string;
	buttonHref?: string;
};

export type FeatureBox = {
	_type: "feature-box";
	title?: string;
	moduleText?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: "span";
			_key: string;
		}>;
		style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
		listItem?: "bullet";
		markDefs?: Array<{
			href?: string;
			_type: "link";
			_key: string;
		}>;
		level?: number;
		_type: "block";
		_key: string;
	}>;
};

export type ContentModule = {
	_type: "content-module";
	title?: string;
	moduleText?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: "span";
			_key: string;
		}>;
		style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
		listItem?: "bullet";
		markDefs?: Array<{
			href?: string;
			_type: "link";
			_key: string;
		}>;
		level?: number;
		_type: "block";
		_key: string;
	}>;
	image?: {
		asset?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		caption?: string;
		alt?: string;
		_type: "image";
	};
	moduleLink?: {
		_ref: string;
		_type: "reference";
		_weak?: boolean;
		[internalGroqTypeReferenceTo]?: "page";
	};
	altModuleLinkText?: string;
	useAltLink?: boolean;
};

export type Twitter = {
	_type: "twitter";
	tweetId?: string;
	twitterTitle?: string;
};

export type Youtube = {
	_type: "youtube";
	url?: string;
};

export type FrontpageHero = {
	_id: string;
	_type: "frontpage-hero";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	subtitle?: string;
};

export type FrontpageFeature = {
	_id: string;
	_type: "frontpage-feature";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
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

export type FrontpageTestimonial = {
	_id: string;
	_type: "frontpage-testimonial";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	showQuote?: boolean;
	quote?: string;
	author?: string;
};

export type FrontpageServices = {
	_id: string;
	_type: "frontpage-services";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	modules?: Array<
		{
			_key: string;
		} & ContentModule
	>;
};

export type InfoboxCollection = {
	_id: string;
	_type: "infobox-collection";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	components?: Array<
		{
			_key: string;
		} & Infobox
	>;
};

export type Settings = {
	_id: string;
	_type: "settings";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	showContactButton?: boolean;
	menuItem1?: {
		active?: boolean;
		title?: string;
		menuLink?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "page";
		};
	};
	menuItem2?: {
		active?: boolean;
		title?: string;
		menuLink?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "page";
		};
	};
	menuItem3?: {
		active?: boolean;
		title?: string;
		menuLink?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "page";
		};
	};
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
	metaOgImage?: {
		asset?: {
			_ref: string;
			_type: "reference";
			_weak?: boolean;
			[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
		};
		hotspot?: SanityImageHotspot;
		crop?: SanityImageCrop;
		_type: "image";
	};
};

export type Page = {
	_id: string;
	_type: "page";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: Slug;
	overview?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: "span";
			_key: string;
		}>;
		style?: "normal";
		listItem?: never;
		markDefs?: null;
		level?: number;
		_type: "block";
		_key: string;
	}>;
	body?: Array<
		| {
				children?: Array<{
					marks?: Array<string>;
					text?: string;
					_type: "span";
					_key: string;
				}>;
				style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
				listItem?: "bullet" | "number" | "checkmark";
				markDefs?: Array<{
					href?: string;
					_type: "link";
					_key: string;
				}>;
				level?: number;
				_type: "block";
				_key: string;
		  }
		| {
				asset?: {
					_ref: string;
					_type: "reference";
					_weak?: boolean;
					[internalGroqTypeReferenceTo]?: "sanity.imageAsset";
				};
				hotspot?: SanityImageHotspot;
				crop?: SanityImageCrop;
				caption?: string;
				alt?: string;
				_type: "image";
				_key: string;
		  }
		| ({
				_key: string;
		  } & Youtube)
		| ({
				_key: string;
		  } & Twitter)
	>;
};

export type SanityImageCrop = {
	_type: "sanity.imageCrop";
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
};

export type SanityImageHotspot = {
	_type: "sanity.imageHotspot";
	x?: number;
	y?: number;
	height?: number;
	width?: number;
};

export type SanityImageAsset = {
	_id: string;
	_type: "sanity.imageAsset";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	originalFilename?: string;
	label?: string;
	title?: string;
	description?: string;
	altText?: string;
	sha1hash?: string;
	extension?: string;
	mimeType?: string;
	size?: number;
	assetId?: string;
	uploadId?: string;
	path?: string;
	url?: string;
	metadata?: SanityImageMetadata;
	source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
	_type: "sanity.assetSourceData";
	name?: string;
	id?: string;
	url?: string;
};

export type SanityImageMetadata = {
	_type: "sanity.imageMetadata";
	location?: Geopoint;
	dimensions?: SanityImageDimensions;
	palette?: SanityImagePalette;
	lqip?: string;
	blurHash?: string;
	hasAlpha?: boolean;
	isOpaque?: boolean;
};

export type Slug = {
	_type: "slug";
	current?: string;
	source?: string;
};

export type Code = {
	_type: "code";
	language?: string;
	filename?: string;
	code?: string;
	highlightedLines?: Array<number>;
};
export declare const internalGroqTypeReferenceTo: unique symbol;