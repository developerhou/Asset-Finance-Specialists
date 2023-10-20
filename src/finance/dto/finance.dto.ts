export class FinanceRequest {
  userId: string;
}

export class CreateFinanceDto {
  userId: string;
  bankAccount: number;
  accountName: string;
  income: number;
  expenses: number;
  assets: number;
  liabilities: number;
}

export class UpdateFinanceDto extends CreateFinanceDto {}

export class FinanceDto extends CreateFinanceDto {
  financeId: string;
}
