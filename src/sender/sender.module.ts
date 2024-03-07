import { Module } from '@nestjs/common';
import { SenderController } from './sender.controller';
import { Sender } from './sender';
import { DatastoreModule } from '../datastore/datastore.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '../mailer/mailer.module';
import { RateLimiterGuard, RateLimiterModule } from 'nestjs-rate-limiter';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [DatastoreModule, ConfigModule, MailerModule, RateLimiterModule],
  controllers: [SenderController],
  providers: [
    Sender,
    {
      provide: APP_GUARD,
      useClass: RateLimiterGuard,
    },
  ],
})
export class SenderModule {}
