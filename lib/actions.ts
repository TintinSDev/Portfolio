"use server"


import { Resend } from 'resend';

const resend = new Resend('re_63aXzFXk_6xv1gKePUat59yQoivQcXKNi');

export const sendEmail = async (name: string, email: string, message: string, subject?: string, phoneNumber?: string) => {
    const { data, error } = await resend.emails.send({
        from: '😃 <onboarding@resend.dev>',
        to: ["mmaina290@gmail.com"],
        subject: subject || `New Message from ${name} on TintinSDev`,
        html: `
            <h5>New Message from ${name}</h1>
            <p><strong>Message</strong> -${message}</p>
            <p>Email: ${email}</p>
            ${phoneNumber ? `<p>Phone Number: ${phoneNumber}</p>` : ''}
        `
    });

    if (error) {
        console.log(error);
        return { error };
    }

    return { data };
}

export const sendResumeViewedEmail = async () => {
    const { data, error } = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to:["mmaina290@gmail.com"],
        subject: 'Portfolio Resume View ' + new Date().toLocaleString(),
        html: `
            <h5><strong>Your Resume has been viewed from your portfolio</strong></h5>
        `
    });

    if (error) {
        console.log(error);
        return { error };
    }

    return { data };
}
