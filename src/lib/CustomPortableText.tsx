import Figure from "@/components/shared/Figure";
import ImageBox from "@/components/shared/ImageBox";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { FaRegCheckSquare } from "react-icons/fa";
import { Tweet } from "react-tweet";
import type { Image } from "sanity";
import CodeBlock from "./CodeBlock";
import YouTubePlayer from "./YouTubePlayer";

export function CustomPortableText({
	paragraphClasses,
	value,
}: {
	paragraphClasses?: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	value: any;
}) {
	const components: PortableTextComponents = {
		block: {
			normal: ({ children }) => {
				return <p className={paragraphClasses}>{children}</p>;
			},
		},
		marks: {
			link: ({ children, value }) => {
				return (
					<a
						className="underline transition hover:opacity-50"
						href={value?.href}
						rel="noreferrer noopener"
					>
						{children}
					</a>
				);
			},
		},
		list: {
			checkmark: ({ children }) => {
				return <ul className="list-none pb-6 pl-0">{children}</ul>;
			},
		},
		listItem: {
			// Ex. 1: customizing common list types
			bullet: ({ children }) => {
				return <li>{children}</li>;
			},
			checkmark: ({ children }) => {
				return (
					<li className="pl-2">
						<span className="inline-flex items-center">
							<FaRegCheckSquare
								className="text-secondary hover:text-secondary-300 duration-700 hover:scale-125"
								size={20}
								style={{ marginRight: "0.5rem" }}
							/>
							{children}
						</span>
					</li>
				);
			},
		},
		types: {
			Twitter: ({ value }) => {
				if (!value?.tweetId) {
					return null;
				}
				return <Tweet id={value.tweetId} />;
			},

			// Keep for legacy reasons. We're using "image" now, but used to use "figure" in the old lekanger.no blog posts
			figure: Figure,

			code: CodeBlock,

			image: ({
				value,
			}: {
				value: Image & { alt?: string; caption?: string };
			}) => {
				return (
					<div className="pb-8">
						<ImageBox
							image={value}
							alt={value.alt}
							classesWrapper="w-full rounded-large md:pt-8 flex flex-col"
						/>
						{value?.caption && (
							<div className="text-sm text-foreground/70 pl-4 pt-1">
								<em>{value.caption}</em>
							</div>
						)}
					</div>
				);
			},

			YouTube: ({ value }) => {
				const { url } = value;
				return <YouTubePlayer url={url} />;
			},

			// Keep this type for legacy reasons.
			youtube: ({ value }) => {
				const { url } = value;
				return <YouTubePlayer url={url} />;
			},

			undefined: ({ value }) => {
				return <div>{value}</div>;
			},
		},
	};

	return <PortableText components={components} value={value} />;
}
