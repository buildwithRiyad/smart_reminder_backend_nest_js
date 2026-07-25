// src/reminder-pattern/reminder-pattern.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReminderPatternController } from './reminder-pattern.controller';
import { ReminderPatternService } from './reminder-pattern.service';

import { ReminderPattern } from './entities/reminder-pattern.entity';

import { ReminderRule } from '../reminder-rule/entities/reminder-rule.entity';

import { Event } from '../events/entities/event.entity';


@Module({

  imports: [
    TypeOrmModule.forFeature([
      ReminderPattern,
      ReminderRule,
      Event,
    ]),
  ],


  controllers: [
    ReminderPatternController,
  ],


  providers: [
    ReminderPatternService,
  ],


  exports: [
    ReminderPatternService,
  ],

})
export class ReminderPatternModule {}