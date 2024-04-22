"use server";

import { EmailTemplate } from "@/components/email-template";
import { headers } from "next/headers";
import { Resend } from "resend";

export async function sendEmail(
	prevState: {
		status: number;
		message: string;
	},
	formData: FormData,
) {
	const { email, firstName, lastName, phone, message } = {
		email: formData.get("email") as string,
		firstName: formData.get("firstName") as string,
		lastName: formData.get("lastName") as string,
		phone: formData.get("phone") as string,
		message: formData.get("message") as string,
	};

	const header = headers();
	const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

	const turnstileToken = formData.get("cf-turnstile-response");

	// biome-ignore lint/style/useConst: We do need to mutate turnstileFormData
	let turnstileFormData = new FormData();
	turnstileFormData.append("secret", `${process.env.TURNSTILE_SECRET_KEY}`);
	turnstileFormData.append("response", turnstileToken as string);
	turnstileFormData.append("ip", ip);

	const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
	const result = await fetch(url, {
		body: turnstileFormData,
		method: "POST",
	});

	const outcome = await result.json();
	if (outcome.success) {
		const resend = new Resend(process.env.RESEND_API_KEY);

		try {
			const { data, error } = await resend.emails.send({
				from: "post@lekanger.no",
				to: "kurt@lekanger.no",
				subject: `Lekanger.no-kontaktskjema / E-post fra ${firstName} ${lastName}`,
				text: `
        Du har fått en melding fra ${firstName} ${lastName}.

        Epost: ${email}
        Telefon: ${phone}
				IP-adresse: ${ip}
        Melding: ${message}
      `,
				react: EmailTemplate({
					email,
					firstName,
					lastName,
					message,
					ip,
					phoneNumber: phone,
				}),
			});

			if (!data || error) {
				return {
					status: 500,
					message: "Kunne ikke sende e-post via skjemaet.",
				};
			}

			return {
				status: 200,
				message:
					"En e-post er sendt til Lekanger tekst og kode. Du hører snart fra oss.",
			};
		} catch (error) {
			return {
				status: 500,
				message: "Kunne ikke sende e-post via skjemaet.",
			};
		}
	} else {
		console.log("something went wrong");
		return {
			status: 400,
			message:
				"«Robot-sjekk» feilet. Prøv igjen, eller ta kontakt via e-post eller telefon.",
		};
	}
}
