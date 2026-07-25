import { Repository } from 'typeorm';
import { ReminderRule } from './entities/reminder-rule.entity';
import { Event } from '../events/entities/event.entity';
import { CreateRuleDto } from './dto/create-rule.dto';
export declare class ReminderRuleService {
    private ruleRepo;
    private eventRepo;
    constructor(ruleRepo: Repository<ReminderRule>, eventRepo: Repository<Event>);
    createRules(dto: CreateRuleDto): Promise<ReminderRule>;
    findByEvent(eventId: string): Promise<ReminderRule[]>;
    calculateReminderDate(eventDate: Date, amount: number, unit: 'MINUTE' | 'HOUR' | 'DAY', type: 'BEFORE' | 'AFTER'): Date;
    deleteRules(id: string): Promise<void>;
}
