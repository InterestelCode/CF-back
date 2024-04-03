import { Module } from '@nestjs/common';

import { IncomeModule } from './module/income/income.module';

import { CategoryModule } from './module/category/category.module';
import { GeneralInfoModule } from './module/general-info/general-info.module';
import { CardTypeModule } from './module/card-type/card-type.module';
import { CreditCardModule } from './module/credit-card/credit-card.module';
import { OutcomeModule } from './module/outcome/outcome.module';
import { AuthModule } from './module/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { User } from './module/user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    OutcomeModule,
    IncomeModule,
    CategoryModule,
    GeneralInfoModule,
    CardTypeModule,
    CreditCardModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql10.freesqldatabase.com',
      port: 3306,
      username: 'sql10696303',
      password: '37GFy6MJlp',
      database: 'sql10696303',
      entities: [User],
      synchronize: true,
    }),
    UserModule, PassportModule.register({session:true})
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
