import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';
import { FinanceModule } from './finance/finance.module';
import { JwtModuleConfig } from './auth/jwt/jwt.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    FinanceModule,
    JwtModuleConfig,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
