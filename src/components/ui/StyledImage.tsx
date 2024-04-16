import { Spacer } from "@nextui-org/react";
import Image, { type StaticImageData } from "next/image";

export const StyledImage = ({
	src,
	alt,
	caption,
	noShadow,
	priority = false,
}: {
	src: StaticImageData | string;
	alt: string;
	caption: string;
	noShadow?: boolean;
	priority?: boolean;
}) => (
	<div className="w-full rounded-large pt-4 pb-8 flex flex-col">
		<Image
			src={src}
			alt={alt}
			priority={priority}
			sizes="(min-width: 640px) 80vw, 100vw"
			className={`rounded-large w-full h-full ${
				noShadow ? "shadow-none" : "shadow-xl"
			}`}
		/>
		<Spacer />
		<span className="text-sm text-foreground/70 pl-4 pt-1">
			<em>{caption}</em>
		</span>
	</div>
);
