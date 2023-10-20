import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@asset-finance.0ltigjh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    ),
  ],
})

// @Module({
//   providers: [
//     {
//       provide: 'MONGO_CLIENT',
//       useFactory: async () => {
//         const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@asset-finance.0ltigjh.mongodb.net/?retryWrites=true&w=majority`;
//         const client = new MongoClient(uri, {
//           serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//           },
//         });

//         return client;
//       },
//     },
//   ],
//   exports: ['MONGO_CLIENT'],
// })
export class DatabaseModule {}
