import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    res.render('index');
  }
  @Get('home')
  getHome(@Res() res: Response) {
    return res.render('Home/listhome');
  }
}
