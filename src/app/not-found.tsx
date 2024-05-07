import { Button, Link, Spacer } from "@nextui-org/react";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center h-screen pb-32 justify-between">
			<Spacer />
			<section className="text-center pb-8">
				<h2 className="text-6xl md:text-8xl text-brand-secondary2 pb-0">404</h2>
				<h3 className="pt-0 pb-16 ">Her var det tomt!</h3>

				<Button
					as={Link}
					size="lg"
					variant="bordered"
					className="rounded-full border-2 border-brand-accent w-24 hover:bg-brand-accent hover:text-black text-xs"
					href="/"
				>
					Til forsiden
				</Button>
			</section>
			<p className="text-xs ">
				Lekanger tekst og kode &#169; {new Date().getFullYear()}
			</p>
		</div>
	);
}
