// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWTService } from './jwt/jwt.service';
import { UserService } from '../user/user.service';

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

  async login(user: any): Promise<any> {
    const payload = { username: user.username, password: user.password };
    const userVerify = this.validateUser(payload.username, payload.password);

    if (!userVerify) {
      throw new UnauthorizedException();
    }

    return {
      access_token: this.jwtService.signPayload(payload),
    };
  }
}
