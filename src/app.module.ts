import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './infra/configuration';
import { SenderModule } from './sender/sender.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),
    SenderModule,
  ],
})
export class AppModule {}
