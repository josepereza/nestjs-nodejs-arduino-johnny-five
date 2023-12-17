import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('blink')
  getHello() {
    return this.appService.getHello();
  }

  @Get('on')
  getOn() {
    return this.appService.getOn();
  }

  @Get('off')
  getOff() {
    return this.appService.getOff();
  }
}
