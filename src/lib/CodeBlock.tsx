import type { CodeBlockProps } from "@/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = (props: CodeBlockProps) => {
	const codeToShow = props?.value?.code || "";
	const language = props?.value?.language || "javascript";

	return (
		<div className="my-4 shadow-lg sm:my-8 rounded-large overflow-hidden">
			<SyntaxHighlighter
				language={language}
				showLineNumbers
				style={atomOneDark}
			>
				{codeToShow}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeBlock;
