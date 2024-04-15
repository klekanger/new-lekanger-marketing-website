interface EmailTemplateProps {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	ip: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	email,
	firstName,
	lastName,
	phoneNumber,
	ip,
	message,
}) => (
	<div>
		<h1>
			Du har fått en melding via NaboWeb-kontaktskjemaet fra {firstName}{" "}
			{lastName}
		</h1>
		<p>Kontaktinformasjon: </p>
		<p>Epost: {email}</p>
		<p>Telefon: {phoneNumber}</p>
		<p>IP-adresse: {ip}</p>
		<p>Melding: {message}</p>
	</div>
);
