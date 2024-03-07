import { Module } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer');

export interface MailerProviderOptions {
  pool: boolean;
  host: string;
  port: number;
  secure: boolean;
}

const mailerProvider = {
  provide: 'MAILER',
  useValue: nodemailer,
};

@Module({
  providers: [mailerProvider],
  exports: ['MAILER'],
})
export class MailerModule {}
