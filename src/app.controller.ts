import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {
    
  }

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('user_password') user_password: number,
    
  ) {
    const hashedPassword = await bcrypt.hash(user_password, 12);

    return this.appService.create({
      username,
      user_password: hashedPassword
    })
  }
}
