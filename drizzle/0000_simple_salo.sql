CREATE SCHEMA "data";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."senders" (
	"id" serial PRIMARY KEY NOT NULL,
	"fromName" varchar(256) NOT NULL,
	"fromEmail" varchar(256) NOT NULL,
	"replyTo" varchar(256),
	"messagePerDay" integer DEFAULT 1 NOT NULL,
	"userName" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"smtpHost" varchar(256) NOT NULL,
	"smtpPort" varchar(256) NOT NULL
);
