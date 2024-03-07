import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../datastore/schema';
import { CreateSenderDTO } from './dto/create-sender.dto';
import { eq } from 'drizzle-orm';
import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
@Injectable()
export class Sender {
  constructor(
    @Inject('DB') private db: NodePgDatabase<typeof schema>,
    @Inject('MAILER') private mailer: typeof nodemailer,
  ) {}

  transport: Transporter<SMTPTransport.SentMessageInfo>;
  poolOptions = {
    pool: true, // use pooled connection
    maxConnections: 1, // set limit to 1 connection only
    maxMessages: 5, // send 5 emails per second
  };

  async create(senderData: CreateSenderDTO) {
    const smtpOptions = {
      host: senderData.smtpHost,
      port: senderData.smtpPort,
      secure: senderData.smtpPort === 465 ? true : false,
      auth: {
        user: senderData.userName,
        pass: senderData.password,
      },
    };

    const nodemailerOptions: SMTPTransport.Options = {
      ...this.poolOptions,
      ...smtpOptions,
    };
    const transport = this.mailer.createTransport(nodemailerOptions);
    try {
      await transport.verify();
      this.transport = transport;

      const [{ password: _, ...sender }] = await this.db
        .insert(schema.sender)
        .values(senderData)
        .returning();
      _;
      return sender;
    } catch (err) {
      throw new HttpException(
        'Invalid SMTP connection',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: number) {
    return this.db.query.sender.findFirst({ where: eq(schema.sender.id, id) });
  }

  async sendEmail({
    senderId,
    to,
    subject,
    text,
  }: {
    senderId: number;
    to: string;
    subject: string;
    text: string;
  }) {
    if (!this.transport) {
      throw new Error('No valid SMTP connection');
    }

    const sender = await this.findOne(senderId);

    const email = await this.transport.sendMail({
      from: `${sender.fromName} ${sender.fromEmail}`,
      to,
      cc: 'vaibhav@five2one.com.au',
      subject,
      text,
      ...(sender.replyTo && { replyTo: sender.replyTo }),
    });

    return email;
  }
}
