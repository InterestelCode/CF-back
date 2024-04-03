import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject("AUTH_SERVICE") private readonly authService:AuthService
  ) {
    super({
      clientID: '196648835878-mu5k05bevkr0af66ja1bu2o33bbg3ncv.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:4322/auth/google/redirect', // Ruta de redireccionamiento después de la autenticación
      scope: ['email', 'profile'], // Ámbito de acceso requerido
    });
  }

  // Método 'validate' para validar y procesar los datos del usuario autenticado
  async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any> {
    // Implementa la lógica para validar y procesar los datos del usuario
    console.log('====================================');
    console.log(accessToken);
    console.log(profile);
    console.log(refreshToken);
    console.log('====================================');
    const {name,emails,photos} = profile;
    const user = {
      email:emails[0].value,
      firstName:name.givenName,
      lastName:name.familyName,
      picture:photos[0].value,
      accessToken,
      id:profile.id
    }
   const verifyUser =  this.authService.validateUser(profile._json.email,profile._json.name,profile.id)
   return verifyUser || null;
  }
}
