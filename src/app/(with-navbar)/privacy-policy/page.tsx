import BackButton from "@/components/ui/Backbutton";

export default function PrivacyPolicy() {
	return (
		<section className="pt-8 sm:pt-0">
			<BackButton />

			<article className="grid grid-cols-12">
				<div className="col-span-12 sm:col-span-8 sm:col-start-2">
					<h1>Personvernerklæring</h1>
					<p>
						<strong>
							Denne personvernerklæringen forteller hvordan lekanger.no samler
							inn og bruker personopplysninger.
						</strong>
					</p>
					<p>
						Lekanger tekst og kode er et firma som leverer tjenester innenfor
						web- og app-utvikling, kommunikasjon og tekstproduksjon.
					</p>
					<p>
						<strong>Behandlingsansvarlig:</strong>
					</p>
					<address className="pb-8">
						<p>
							Lekanger tekst og kode <br />
							Gartner Moens vei 32A, <br />
							1809 Askim
						</p>
						<p>
							E-post: <a href="mailto:post@lekanger.no">post@lekanger.no</a>
							<br />
							Telefon: <a href="tel:+4740210140">+47 4021 0140</a>
						</p>
						<p>Org. nr: 933085422</p>
					</address>
					<h2>Personopplysninger som behandles</h2>
					<p>
						Vi kan behandle og samle inn følgende kategorier av
						personopplysninger:
					</p>
					<ul>
						<li>
							Identifikasjonsdata (for eksempel navn, e-post og telefonnummer)
						</li>
						<li>
							Data om bruk av nettsidene (for eksempel besøkte sider, tid brukt
							på sider, hvilke lenker på siden du klikker på){" "}
						</li>
						<li>
							Enhetsinformasjon og tilkoblingsdata (for eksempel IP-adresse,
							type nettleser, enhetstype, skjermstørrelse og andre data som
							automatisk overføres fra enheten din.
						</li>
					</ul>
					<p>
						Vi gjør oppmerksom på at identifikasjonsdata som navn og e-post kun
						samles inn dersom du velger å bruke vårt kontaktskjema. Da blir
						informasjonen du har lagt inn sendt som e-post til oss slik at vi
						kan ta kontakt med deg.
					</p>

					<h2>Tredjeparts verktøy</h2>

					<p>
						<strong>Sentry: </strong>Vi bruker løsningen Sentry fra Functional
						Software Inc for å overvåke stabiliteten til nettsidene og få
						varsling ved eventuelle feil i programkoden. Dette gjør vi for å
						forbedre stabiliteten til nettsiden. Sentry kan få informasjon om
						for eksempel hvilken type enhet du har brukt når en feil oppsto,
						tidspunktet feilen oppsto og eventuelt hva du klikket på når feilen
						oppsto.
					</p>
					<p>Sentry bruker ingen data til reklameformål.</p>
					<p>For mer informasjon, se Sentrys personvernerklæring: </p>
					<p>
						<a href="https://sentry.io/privacy/">https://sentry.io/privacy/</a>
						<br />
						<a href="https://sentry.io/legal/dpa/">
							https://sentry.io/legal/dpa/
						</a>
					</p>
					<h2>Hvordan vi bruker personopplysningene</h2>
					<h3>Salg og markedsføring</h3>
					<p>
						Vi bruker dine personopplysninger til å ta kontakt med deg hvis du
						selv har bedt om det. Det rettslige grunnlaget for å behandle
						personopplysninger til dette formålet er ditt samtykke.
					</p>
					<h3>Analyse og forbedring av tjenester</h3>
					<p>
						Informasjon om hvordan du bruker nettsidene brukes både for
						feilsøking og til å analysere bruken av nettsidene slik at vi kan
						forbedre dem. Det rettslige grunnlaget for å behandle
						personopplysninger til dette formålet er vår berettigede interesse.
					</p>

					<h2>Dine rettigheter</h2>

					<p>Du har rett til:</p>

					<ul>
						<li>
							Å be om innsyn i alle opplysninger vi har lagret om deg. Ta
							kontakt på e-postadressen oppgitt ovenfor.
						</li>
						<li>Å få alle opplysninger vi har lagret om deg slettet</li>
						<li>Å få korrigert eller endret informasjon om deg</li>
						<li>Å få en kopi av informasjonen vi har om deg</li>
					</ul>

					<h2>Du kan klage</h2>
					<p>
						Hvis du mener vi ikke overholder reglene i personopplysningsloven,
						håper vi du vil ta kontakt med oss og si ifra. Du kan også klage
						over vår behandling av personopplysninger til Datatilsynet.
					</p>
				</div>
			</article>
			<section />
		</section>
	);
}
