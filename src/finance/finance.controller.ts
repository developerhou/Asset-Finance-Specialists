import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { FinanceService } from './finance.service';
import {
  CreateFinanceDto,
  FinanceDto,
  FinanceRequest,
  UpdateFinanceDto,
} from './dto/finance.dto';

@Controller('finance')
export class FinanceController {
  constructor(private readonly service: FinanceService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Query() request: FinanceRequest): Promise<FinanceDto[]> {
    return await this.service.findAll(request);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: string): Promise<FinanceDto | null> {
    return await this.service.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() finance: CreateFinanceDto): Promise<FinanceDto> {
    return await this.service.create(finance);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() finance: UpdateFinanceDto,
  ): Promise<FinanceDto | null> {
    return this.service.update(id, finance);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string): Promise<FinanceDto | null> {
    return this.service.delete(id);
  }
}
