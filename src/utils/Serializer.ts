/* eslint-disable @typescript-eslint/ban-types */
import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from 'src/module/auth/auth.service';
import { User } from 'src/module/user/entities/user.entity';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }
 
  serializeUser(user: User, done: Function) {
    console.log('====================================');
    console.log("serializar user",user);
    console.log('====================================');
    done(null,user)
  }
  
  async deserializeUser(payload: any, done: Function) {
      const user = await this.authService.findUser(payload.id);
      console.log('====================================');
      console.log("deserializar user",user);
      console.log('====================================');
   return user? done(null,user): done (null,null);
  }
}
