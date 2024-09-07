"use server"


// import { Resend } from 'resend';

// const resend = new Resend('re_63aXzFXk_6xv1gKePUat59yQoivQcXKNi');

// export const sendEmail = async (name: string, email: string, message: string, subject?: string, phoneNumber?: string) => {
//     const { data, error } = await resend.emails.send({
//         from: '😃 <onboarding@resend.dev>',
//         to: ["mmaina290@gmail.com"],
//         subject: subject || `New Message from ${name} on TintinSDev`,
//         html: `
//             <h5>New Message from ${name}</h1>
//             <p><strong>Message</strong> -${message}</p>
//             <p>Email: ${email}</p>
//             ${phoneNumber ? `<p>Phone Number: ${phoneNumber}</p>` : ''}
//         `
//     });

//     if (error) {
//         console.log(error);
//         return { error };
//     }

//     return { data };
// }
import { Recipient, EmailParams, MailerSend } from 'mailersend';  // Import using TypeScript syntax

// Initialize MailerSend with your API key
const mailersend = new MailerSend({
    apiKey: "mlsn.32ceec805065709cedb75d7d4f18aba529c7da8770b2b55c36ba464f759b8836",  // Replace with your actual API key
});

// Define the recipient(s)
const recipients: Recipient[] = [new Recipient("mmaina290@gmail.com", "Recipient")];

// Create email parameters
export const sendEmail = async (
    name: string,
    email: string,
    message: string,
    subject: string,
    phoneNumber?: string
  ): Promise<any> => {
    const emailParams = new EmailParams()
      .setFrom("info@martinmaina.dev")  // Make sure the 'from' email is valid
      .setFromName("Martin")
      .setRecipients(recipients)
      .setSubject(subject || "Someone viewed your Resume")
      .setHtml(`Greetings Martin.<br><strong>Message:Resume Viewed</strong> ${message}<br><strong>Phone:</strong> ${phoneNumber || 'N/A'}`)
      .setText(`Greetings Martin. Message: ${message}. Phone: ${phoneNumber || 'N/A'}`);
  
    try {
      const response = await mailersend.send(emailParams);
      console.log('Email sent successfully:', response);
      return { data: response };
    } catch (error) {
      console.error('Error sending email:', error);
      return { error };
    }
  };
    export const sendResumeViewedEmail = async (): Promise<void> => {
        const recipients: Recipient[] = [new Recipient("mmaina290@gmail.com", "Recipient")];
      
        const emailParams = new EmailParams()
          .setFrom("martinmaina.dev")
          .setFromName("Resume Viewer")
          .setRecipients(recipients)
          .setSubject("Resume Viewed")
          .setHtml("Your resume has been viewed.")
          .setText("Your resume has been viewed.");
      
        try {
          const response = await mailersend.send(emailParams);
          console.log('Email sent successfully:', response);
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };


// export const sendResumeViewedEmail = async () => {
//     const { data, error } = await resend.emails.send({
//         from: 'Portfolio <onboarding@resend.dev>',
//         to:["mmaina290@gmail.com"],
//         subject: 'Portfolio Resume View ' + new Date().toLocaleString(),
//         html: `
//             <h5><strong>Your Resume has been viewed from your portfolio</strong></h5>
//         `
//     });

//     if (error) {
//         console.log(error);
//         return { error };
//     }

//     return { data };
// }
