import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWTService } from './jwt/jwt.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDto, UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JWTService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUserByUsername(username);

    if (user && (await user.validatePassword(password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: CreateUserDto): Promise<any> {
    const userVerify = await this.validateUser(user.username, user.password);

    if (!userVerify) {
      throw new UnauthorizedException();
    }

    return {
      access_token: this.jwtService.signPayload(user),
    };
  }

  async register(user: CreateUserDto): Promise<boolean> {
    return await this.userService.createUser(user.username, user.password);
  }

  async profile(username: string): Promise<UserDto> {
    return await this.userService.findUserByUsername(username);
  }
}
