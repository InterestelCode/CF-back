import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google-strategy.auth';
 
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { SessionSerializer } from 'src/utils/Serializer';

@Module({
  imports: [  TypeOrmModule.forFeature([User])],
  controllers: [AuthController], // Exportando PassportModule y AuthService para su uso en otros módulos
    
  providers: [
    GoogleStrategy,SessionSerializer,
  { 
    provide: 'AUTH_SERVICE', 
    useClass: AuthService ,
  },
  ],  
   
})
export class AuthModule {}
