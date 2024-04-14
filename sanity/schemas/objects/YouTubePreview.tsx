// Description of how to render this in the frontend:
// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block

import { Flex, Text } from "@sanity/ui";
import YouTubePlayer from "react-player/youtube";
import type { PreviewProps } from "sanity";

export function YouTubePreview(props: PreviewProps) {
	const { title: url } = props;

	return (
		<Flex padding={3} align="center" justify="center">
			{typeof url === "string" ? (
				<YouTubePlayer url={url} />
			) : (
				<Text>Legg inn YouTube-URL</Text>
			)}
		</Flex>
	);
}
