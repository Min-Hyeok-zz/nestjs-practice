import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'https';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  getLogin(): string {
    return this.appService.Login()
  }
}
