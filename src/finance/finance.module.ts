import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/db/database.module';
import { Finance, FinanceSchema } from 'src/model/finance.model';
import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Finance.name, schema: FinanceSchema }]),
  ],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}
