import { Repository } from 'typeorm';
import { ReminderRule } from './entities/reminder-rule.entity';
import { Event } from '../events/entities/event.entity';
import { CreateRuleDto } from './dto/create-rule.dto';
export declare class ReminderRuleService {
    private ruleRepo;
    private eventRepo;
    constructor(ruleRepo: Repository<ReminderRule>, eventRepo: Repository<Event>);
    createRules(dto: CreateRuleDto): Promise<ReminderRule>;
    calculateReminderDate(eventDate: Date, amount: number, unit: string, type: string): Date;
    deleteRules(id: string): Promise<ReminderRule>;
}
