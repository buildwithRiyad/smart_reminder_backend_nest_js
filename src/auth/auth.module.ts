import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { UsersModule } from '../users/users.module';

import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [

    ConfigModule,

    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    UsersModule,

    JwtModule.registerAsync({

      imports: [
        ConfigModule
      ],

      inject: [
        ConfigService
      ],

      useFactory: (
        config: ConfigService
      ) => ({

        secret: config.get<string>(
          'JWT_SECRET'
        ),

        signOptions: {
          expiresIn: config.get<string>(
            'JWT_EXPIRES_IN'
          ),
        },

      }),

    }),

  ],


  controllers: [
    AuthController
  ],


  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy,
  ],


  exports: [
    AuthService,
    JwtModule,
  ],

})
export class AuthModule {}