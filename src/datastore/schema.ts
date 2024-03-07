import 'dotenv/config';
import { serial, varchar, pgSchema, integer } from 'drizzle-orm/pg-core';
export const myschema = pgSchema('data');

export const sender = myschema.table('senders', {
  id: serial('id').primaryKey(),
  fromName: varchar('fromName', { length: 256 }).notNull(),
  fromEmail: varchar('fromEmail', { length: 256 }).notNull(),
  replyTo: varchar('replyTo', { length: 256 }),
  messagePerDay: integer('messagePerDay').notNull().default(1),
  userName: varchar('userName', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  smtpHost: varchar('smtpHost', { length: 256 }).notNull(),
  smtpPort: integer('smtpPort').notNull(),
});

export type Sender = typeof sender.$inferSelect; // return type when queried
export type NewSender = typeof sender.$inferInsert; // insert type
