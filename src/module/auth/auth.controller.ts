import { Controller, Get, Req, UseGuards } from '@nestjs/common';
 
import { ApiTags } from '@nestjs/swagger';
import { GoogleGuard } from 'src/utils/guard/google.guard';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    
    constructor(
      
      //private readonly authService:AuthService
      
      ) {
     
        
    }
  @Get('google/login')
  @UseGuards(GoogleGuard)
  async googleAuth() {
    return "auth ok!"
  }

  @Get('google/redirect')
  @UseGuards(GoogleGuard)
  async googleAuthRedirect(@Req() req,) {
    
    return "redirect google"
    //return this.authService.googleLogin(req)

  }
}
