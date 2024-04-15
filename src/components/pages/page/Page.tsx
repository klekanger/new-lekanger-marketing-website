import BackButton from "@/components/ui/Backbutton";
import { CustomPortableText } from "@/lib/CustomPortableText";
import type { PageProps } from "@/types";

export default function Page(props: PageProps) {
	const { data } = props;

	return (
		<section className="pt-8 sm:pt-0">
			<BackButton />

			<article className="grid grid-cols-12">
				<div className="col-span-12 sm:col-span-10 sm:col-start-2">
					<h1 className="xl:pr-64">{data?.title}</h1>

					{data && (
						<CustomPortableText
							// biome-ignore lint/suspicious/noExplicitAny: <explanation>
							value={data?.body as any}
							paragraphClasses="lg:pr-64"
						/>
					)}
					{!data && (
						<p className="text-danger text-center">Siden ikke funnet (404)</p>
					)}
				</div>
			</article>
		</section>
	);
}
