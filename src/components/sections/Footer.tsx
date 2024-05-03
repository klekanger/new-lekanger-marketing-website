"use client";

import CompanyLogo from "@/components/CompanyLogo";
import { Spacer } from "@nextui-org/react";
import { ArrowBigUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<footer className="w-full sm:px-8 bg-brand-secondary/10 py-8 mt-16">
			<div className="flex flex-col md:flex-row md:items-start flex-wrap m-auto justify-between items-center max-w-4xl gap-8">
				<div className="basis-1 w-2/3 md:w-full">
					<Link href="/" className="flex justify-center">
						<CompanyLogo width="250px" />
					</Link>
					<Spacer />
					<p className="text-center md:text-left text-xs font-light py-2 sm:py-4 sm:mx-0  w-auto md:w-full">
						Profesjonelle og raske nettsider bygget med de nyeste teknologiene.
						Når WordPress ikke er godt nok.
					</p>
				</div>
				<address className="not-italic text-center sm:text-left">
					<div className="text-xs">
						<strong>
							Lekanger tekst og kode &copy; {new Date().getFullYear()}
						</strong>
					</div>

					<div>
						Gartner Moens vei 32A
						<br />
						1809 Askim
					</div>
					<Spacer y={4} />
					<div>
						<strong>E-post: </strong>
						<a href="mailto:post@lekanger.no">post@lekanger.no</a>

						<br />

						<strong>Telefon: </strong>
						<a href="tel:+4740210140">+47 4021 0140</a>
					</div>
					<Spacer y={4} />
					<div>
						<strong>Org. nr: </strong>933085422
					</div>
				</address>

				<div>
					<a
						href="#top"
						className="flex justify-center sm:justify-start items-center pb-4"
					>
						<ArrowBigUp /> Gå til toppen
					</a>
					<Link href="/privacy-policy" className="text-xs">
						Personvern&shy;erklæring
					</Link>
					<Spacer />
					<div>
						<Link href="/mine-tjenester" className="text-xs">
							→ Tjenester
						</Link>
					</div>
					<div>
						<Link href="/prosjekter" className="text-xs">
							→ Prosjekter
						</Link>
					</div>

					<div />
				</div>
			</div>
		</footer>
	);
}
