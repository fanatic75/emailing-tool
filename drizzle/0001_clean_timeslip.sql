ALTER TABLE "data"."senders" ALTER COLUMN "smtpPort" TYPE integer USING "smtpPort"::integer;