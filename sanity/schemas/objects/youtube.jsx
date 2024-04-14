import { defineType, defineField } from "sanity";
import { PlayIcon } from "@sanity/icons";
import { YouTubePreview } from "./YouTubePreview";

export const youtube = defineType({
	name: "youtube",
	type: "object",
	title: "YouTube",
	icon: PlayIcon,
	fields: [
		defineField({
			name: "url",
			type: "url",
			title: "URL til YouTube-videoen",
		}),
	],
	preview: {
		select: { title: "url" },
	},
	components: {
		preview: YouTubePreview,
	},
});
