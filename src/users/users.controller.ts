import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@Req() req: any) {
    return req.user;
  }
}
