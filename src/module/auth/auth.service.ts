import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findUser(id: any) {
    return await this.userRepository.findOneBy({ id });
  }
  async validateUser(
    email: string,
    fullName: string,
    authId: string,
  ): Promise<any> {
    // Implementa la lógica para validar al usuario
    const user = await this.userRepository.findOneBy({ email });
    console.log('====================================');
    console.log('USUARIO ENCONTRADO', user);
    console.log('====================================');
    if (user) return user;
    const newUser = this.userRepository.create({ email, fullName, authId });
    return await this.userRepository.save(newUser);
  }

  async login(user: any) {
    // Implementa la lógica para iniciar sesión en el usuario
  }

  async register(user: any) {
    // Implementa la lógica para registrar al usuario en tu base de datos
  }

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User Info from google',
      user: req.user,
    };
  }
}
