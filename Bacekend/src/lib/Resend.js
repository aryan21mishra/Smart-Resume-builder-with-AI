import { Resend } from "resend";
import WelcomeEmail from "../react-email/WelcomeEmail.js";

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (to, subject, username) => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject: subject,
    react: WelcomeEmail({
      username: username,
      company: "Smart Resume Builder",
    }),
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};
