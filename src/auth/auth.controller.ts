import { Controller, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto, UserDto } from 'src/user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() userDto: CreateUserDto): Promise<any> {
    return await this.service.login(userDto);
  }

  @Post('register')
  async register(@Body() userDto: CreateUserDto): Promise<boolean> {
    return await this.service.register(userDto);
  }

  @Get('profile')
  async profile(@Param() username: string): Promise<UserDto> {
    return await this.service.profile(username);
  }
}
