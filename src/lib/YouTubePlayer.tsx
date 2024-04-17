"use client";

import { divider } from "@nextui-org/react";
import ReactPlayer from "react-player";

export default function YouTubePlayer({ url }: { url: string }) {
	return (
		<div className="overflow-hidden pt-2 pb-4">
			<ReactPlayer url={url} style={{ maxWidth: "100%" }} />
		</div>
	);
}
