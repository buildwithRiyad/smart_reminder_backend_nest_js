import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';  
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ReminderRuleModule } from './reminder-rule/reminder-rule.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),

    AuthModule,
    EventsModule,
    UsersModule,
    ReminderRuleModule
  ],
})
export class AppModule {}