// src/reminder-rule/reminder-rule.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReminderRule } from './entities/reminder-rule.entity';
import { Event } from '../events/entities/event.entity';
import { CreateRuleDto } from './dto/create-rule.dto';

@Injectable()
export class ReminderRuleService {
  constructor(
    @InjectRepository(ReminderRule)
    private ruleRepo: Repository<ReminderRule>,
    @InjectRepository(Event)
    private eventRepo: Repository<Event>,
  ) {}

  /**
   * Create a new reminder rule for an event.
   */
  async createRules(dto: CreateRuleDto): Promise<ReminderRule> {
    const event = await this.eventRepo.findOne({
      where: { id: dto.eventId },
    });

    if (!event) {
      throw new NotFoundException(`Event with ID "${dto.eventId}" not found`);
    }

    // ✅ নতুন ইনস্ট্যান্স তৈরি করুন এবং প্রপার্টি অ্যাসাইন করুন
    const rule = new ReminderRule();
    rule.amount = dto.amount;
    rule.unit = dto.unit;
    rule.type = dto.type;
    rule.event = event; // অথবা rule.eventId = dto.eventId

    return this.ruleRepo.save(rule);
  }

  /**
   * Find all rules for a specific event.
   * Useful for recurring engine to fetch rules when processing occurrences.
   */
  async findByEvent(eventId: string): Promise<ReminderRule[]> {
    return this.ruleRepo.find({
      where: { eventId },
      order: { createdAt: 'ASC' },
    });
  }

  /**
   * Calculate the reminder notification date based on event date and rule settings.
   */
  calculateReminderDate(
    eventDate: Date,
    amount: number,
    unit: 'MINUTE' | 'HOUR' | 'DAY',
    type: 'BEFORE' | 'AFTER',
  ): Date {
    const date = new Date(eventDate);

    if (type === 'BEFORE') {
      switch (unit) {
        case 'DAY':
          date.setDate(date.getDate() - amount);
          break;
        case 'HOUR':
          date.setHours(date.getHours() - amount);
          break;
        case 'MINUTE':
          date.setMinutes(date.getMinutes() - amount);
          break;
      }
    } else if (type === 'AFTER') {
      switch (unit) {
        case 'DAY':
          date.setDate(date.getDate() + amount);
          break;
        case 'HOUR':
          date.setHours(date.getHours() + amount);
          break;
        case 'MINUTE':
          date.setMinutes(date.getMinutes() + amount);
          break;
      }
    }

    return date;
  }

  /**
   * Delete a reminder rule by ID.
   */
  async deleteRules(id: string): Promise<void> {
    const rule = await this.ruleRepo.findOne({
      where: { id },
    });

    if (!rule) {
      throw new NotFoundException(`Rule with ID "${id}" not found`);
    }

    await this.ruleRepo.remove(rule);
  }
}