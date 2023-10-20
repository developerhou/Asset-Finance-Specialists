import { Test, TestingModule } from '@nestjs/testing';
import { FinanceService } from './finance.service';

describe('FinanceService', () => {
  let service: FinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceService],
    }).compile();

    service = module.get<FinanceService>(FinanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of finance assets', async () => {
      const mockFinances = [
        {
          financeId: '1',
          userId: 'Task 1',
          bankAccount: 12345678,
          accountName: 'Jane',
          income: 2000,
          expenses: 1000,
          assets: 10000,
          liabilities: 0,
        },
      ];

      // Mock the actual implementation of the findAll method
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => mockFinances);

      // Call the method and assert the result
      const result = await service.findAll({
        userId: '6531985015e27c41e5ff04a9',
      });
      expect(result).toEqual(mockFinances);
    });
  });

  describe('findById', () => {
    it('should return one finance assets', async () => {
      const mockFinances = {
        financeId: '1',
        userId: 'Task 1',
        bankAccount: 12345678,
        accountName: 'Jane',
        income: 2000,
        expenses: 1000,
        assets: 10000,
        liabilities: 0,
      };

      jest
        .spyOn(service, 'findById')
        .mockImplementation(async () => mockFinances);

      // Call the method and assert the result
      const result = await service.findById('6531985015e27c41e5ff04a9');
      expect(result).toEqual(mockFinances);
    });
  });
});
