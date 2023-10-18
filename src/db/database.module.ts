// mongo.module.ts
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'MONGO_CLIENT',
      useFactory: async (configService: ConfigService) => {
        const uri = `mongodb+srv://${configService.get<string>(
          'DB_USERNAME',
        )}:${configService.get<string>(
          'DB_PASSWORD',
        )}}@asset-finance.44gjeec.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          },
        });

        return client;
      },
    },
  ],
  exports: ['MONGO_CLIENT'],
})
export class DatabaseModule {}
