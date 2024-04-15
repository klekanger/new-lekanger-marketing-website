import { TwitterTweetEmbed } from "react-twitter-embed";
import type { PreviewProps } from "sanity";

export function TwitterPreview(props: PreviewProps & { tweetId: string }) {
	console.log("TwitterPreview, props ", props);
	const { tweetId, renderDefault } = props || {};

	if (!tweetId) {
		return (
			<div>
				{renderDefault({ ...props, title: "Twitter Embed" })}
				Tweet-ID mangler
			</div>
		);
	}

	return (
		<div>
			{renderDefault({ ...props, title: "Twitter Embed" })}
			<TwitterTweetEmbed tweetId={tweetId} />
		</div>
	);
}
