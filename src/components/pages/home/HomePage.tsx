import ContactInfo from "@/components/sections/ContactInfo";
import Feature from "@/components/sections/Feature";
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import type { HomePageProps } from "@/types";


export default function HomePage({ data }: HomePageProps) {
	const {
		frontpageHeroContent,
		frontpageFeatureContent,
		frontpageInfoboxContent,
		frontpageServicesContent,
		frontpageTestimonialContent,
	} = data;

	return (
		<>
			<Hero className="mb-16" content={frontpageHeroContent} />

			<div className="max-w-6xl mx-auto md:pt-16">
				<InfoSection content={frontpageInfoboxContent} component="frontpage1" />
				<Services content={frontpageServicesContent} />
				{frontpageTestimonialContent?.data.showQuote && (
					<Testimonial
						quote={frontpageTestimonialContent?.data?.quote ?? ""}
						author={frontpageTestimonialContent?.data?.author ?? ""}
					/>
				)}
				<InfoSection content={frontpageInfoboxContent} component="frontpage2" />
				<Feature content={frontpageFeatureContent} />
				<ContactInfo />
			</div>
		</>
	);
}
