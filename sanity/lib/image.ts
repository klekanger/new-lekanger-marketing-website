import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

export const imageBuilder = (source: any) =>
	createImageUrlBuilder({
		projectId: projectId || "",
		dataset: dataset || "",
	}).image(source);

export const urlForImage = (source: Image) => {
	return imageBuilder(source).auto("format").fit("max").url();
};
