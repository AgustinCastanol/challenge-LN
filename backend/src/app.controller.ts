import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtFilter } from './jwt/jwt.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
