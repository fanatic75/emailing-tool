import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { configurationType } from '../infra/configuration';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
const databaseProvider = {
  provide: 'DB',
  useFactory: async (config: ConfigService) => {
    const primaryDb = drizzle(
      new Pool({
        connectionString: config.get<configurationType['db']>('db').url,
      }),
      {
        schema: schema,
      },
    );
    return primaryDb;
  },
  inject: [ConfigService],
};

@Module({
  providers: [databaseProvider],
  exports: ['DB'],
})
export class DatastoreModule {}
