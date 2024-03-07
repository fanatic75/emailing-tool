import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function nodemailerVerifyConnectionPromiseWrapper(
  transport: Transporter<SMTPTransport.SentMessageInfo>,
): Promise<Error | true> {
  return new Promise((resolve, reject) => {
    console.log('coming up');
    console.log('transport', transport);
    transport.verify((error, success) => {
      console.log('coming up');
      if (error) {
        reject(error);
      } else {
        resolve(success);
      }
    });
  });
}
