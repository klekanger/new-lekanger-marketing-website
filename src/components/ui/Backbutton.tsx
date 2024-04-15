import { Link } from "@nextui-org/react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function BackButton({ href = "/" }: { href?: string }) {
	return (
		<div className="pb-8">
			<Link href={href} size="lg" className="text-secondary text-xl">
				<FaLongArrowAltLeft />
				<span className="pl-2">Tilbake</span>
			</Link>
		</div>
	);
}
