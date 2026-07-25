// src/reminder-rule/reminder-rule.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReminderRuleController } from './reminder-rule.controller';
import { ReminderRuleService } from './reminder-rule.service';
import { ReminderRule } from './entities/reminder-rule.entity';
import { Event } from '../events/entities/event.entity';   // 👈 import Event entity

@Module({
  imports: [
    TypeOrmModule.forFeature([ReminderRule, Event]),      // 👈 add Event here
  ],
  controllers: [ReminderRuleController],
  providers: [ReminderRuleService],
  exports: [ReminderRuleService],
})
export class ReminderRuleModule {}