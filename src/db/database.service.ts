import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class DBService {
  private mongoClient: MongoClient;

  constructor(@Inject('MONGO_CLIENT') mongoClient: MongoClient) {
    this.mongoClient = mongoClient;
  }

  async getClient(): Promise<Db> {
    try {
      await this.mongoClient.connect();
      const db: Db = this.mongoClient.db('asset-finance');
      return db;
    } catch (e) {
      throw new InternalServerErrorException(e);
    } finally {
      await this.mongoClient.close();
    }
  }
}
