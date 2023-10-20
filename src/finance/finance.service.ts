import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Finance } from 'src/model/finance.model';
import {
  CreateFinanceDto,
  FinanceDto,
  FinanceRequest,
  UpdateFinanceDto,
} from './dto/finance.dto';

@Injectable()
export class FinanceService {
  constructor(
    @InjectModel(Finance.name) private readonly financeModel: Model<Finance>,
  ) {}

  async findAll(request: FinanceRequest): Promise<FinanceDto[]> {
    return this.financeModel.find({ userId: request.userId }).exec();
  }

  async findById(id: string): Promise<FinanceDto | null> {
    return this.financeModel.findById({ financeId: id }).exec();
  }

  async create(finance: CreateFinanceDto): Promise<FinanceDto> {
    const createdFinance = new this.financeModel(finance);
    return createdFinance.save();
  }

  async update(
    id: string,
    finance: UpdateFinanceDto,
  ): Promise<FinanceDto | null> {
    return this.financeModel
      .findByIdAndUpdate({ financeId: id }, finance, { new: true })
      .exec();
  }

  async delete(id: string): Promise<FinanceDto | null> {
    return this.financeModel.findByIdAndDelete({ financeId: id }).exec();
  }
}
