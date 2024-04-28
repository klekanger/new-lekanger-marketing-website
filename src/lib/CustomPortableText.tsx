import Figure from "@/components/shared/Figure";
import ImageBox from "@/components/shared/ImageBox";
import {
	PortableText,
	type PortableTextComponents,
	toPlainText,
} from "@portabletext/react";
import { FaCheck } from "react-icons/fa";
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
			h2: ({ children }) => {
				return <h2 className="lg:pr-64">{children}</h2>;
			},
			h3: ({ children }) => {
				return <h3 className="lg:pr-64">{children}</h3>;
			},
			h4: ({ children }) => {
				return <h4 className="lg:pr-64">{children}</h4>;
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
			code: ({ children }) => {
				return (
					<code
						style={{
							backgroundColor: "#48007e",
							paddingLeft: "0.125rem",
							paddingRight: "0.125rem",
							borderRadius: "0.2rem",
							fontFamily: "monospace",
						}}
					>
						{children}
					</code>
				);
			},
		},
		list: {
			checkmark: ({ children }) => {
				return <ul className="list-none pb-6 pl-0">{children}</ul>;
			},
			number: ({ children }) => <ol>{children}</ol>,
		},
		listItem: {
			// Ex. 1: customizing common list types
			bullet: ({ children }) => {
				return <li>{children}</li>;
			},
			number: ({ children }) => {
				return <li>{children}</li>;
			},

			checkmark: ({ children }) => {
				return (
					<li className="pl-2">
						<span className="flex items-start">
							<FaCheck
								className="text-secondary hover:text-secondary-300 mr-[0.5rem]"
								style={{
									marginRight: "0.5rem",
									marginTop: "0.4rem",
								}}
							/>
							<span className="w-full lg:pr-64 leading-tight">{children}</span>
						</span>
					</li>
				);
			},
		},

		types: {
			code: CodeBlock,

			Twitter: ({ value }) => {
				if (!value?.tweetId) {
					return null;
				}
				return <Tweet id={value.tweetId} />;
			},

			// Keep for legacy reasons. We're using "image" now, but used to use "figure" in the old lekanger.no blog posts
			figure: Figure,

			image: ({
				value,
			}: {
				value: Image & { alt?: string; caption?: string };
			}) => {
				return (
					<div className="imagebox">
						<ImageBox image={value} alt={value.alt} />
						{value?.caption && (
							<div className="caption">
								<em>{value.caption}</em>
							</div>
						)}
					</div>
				);
			},

			YouTube: ({ value }) => {
				const { url } = value;
				return (
					<div
						style={{
							position: "relative",
							paddingBottom: "56.25%",
							paddingTop: 25,
							height: 0,
						}}
					>
						<YouTubePlayer url={url} />
					</div>
				);
			},

			// Keep this type for legacy reasons.
			youtube: ({ value }) => {
				const { url } = value;
				return (
					<div
						style={{
							position: "relative",
							paddingBottom: "56.25%",
							paddingTop: 25,
							height: 0,
						}}
					>
						<YouTubePlayer url={url} />
					</div>
				);
			},

			undefined: ({ value }) => {
				return <div>{value}</div>;
			},
		},
	};

	return <PortableText components={components} value={value} />;
}
