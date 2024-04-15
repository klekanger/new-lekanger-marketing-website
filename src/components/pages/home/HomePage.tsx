// import Carousel from "@/components/sections/Carousel";
// import Communication from "@/components/sections/Communication";
// import Contact from "@/components/sections/Contact";
import ContactInfo from "@/components/sections/ContactInfo";
import Feature from "@/components/sections/Feature";
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";
import InfoSectionTwo from "@/components/sections/InfoSectionTwo";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import type { HomePageProps } from "@/types";
import { Spacer } from "@nextui-org/react";

export default function HomePage({ data }: HomePageProps) {
	const {
		settingsContent,
		frontpageHeroContent,
		frontpageFeatureContent,
		frontpageInfoboxContent,
		frontpageServicesContent,
		frontpageTestimonialContent,
	} = data;

	return (
		<>
			<Spacer />

			<Hero className="mb-16" content={frontpageHeroContent} />

			<div className="max-w-6xl mx-auto md:pt-16">
				<InfoSection content={frontpageInfoboxContent} component="frontpage1" />
				<Services content={frontpageServicesContent} />
				<Testimonial
					quote="Jeg er veldig fornøyd med jobben Lekanger tekst og kode gjorde for oss. Leveringstid, oppfølging og resultatet &ndash; alt har vært veldig bra."
					author="David Filtvedt, daglig leder i EkstraHjelp1"
				/>
				<InfoSection content={frontpageInfoboxContent} component="frontpage2" />
				<Feature />
				<ContactInfo />
			</div>
		</>
	);
}
