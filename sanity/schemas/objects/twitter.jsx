import { defineType, defineField } from "sanity";
import { TwitterPreview } from "./TwitterPreview";

export const twitter = defineType({
	name: "twitter",
	type: "object",
	title: "Twitter Embed",
	fields: [
		defineField({
			name: "tweetId",
			type: "string",
			title: "Twitter tweet ID",
			description: "Tweet-ID finner du i slutten av URL-en til tweeten.",
		}),
		defineField({
			name: "twitterTitle",
			type: "string",
			title: "Tittel på tweet",
		}),
	],
	preview: {
		select: {
			tweetId: "tweetId",
		},
	},
	components: {
		preview: TwitterPreview,
	},
});
