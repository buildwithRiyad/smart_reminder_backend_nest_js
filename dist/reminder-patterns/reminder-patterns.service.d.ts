import { Repository } from 'typeorm';
import { ReminderPattern } from './entities/reminder-pattern.entity';
import { ReminderRule } from '../reminder-rule/entities/reminder-rule.entity';
import { Event } from '../event/entities/event.entity';
import { CreatePatternDto } from './dto/create-pattern.dto';
export declare class ReminderPatternService {
    private patternRepo;
    private ruleRepo;
    private eventRepo;
    constructor(patternRepo: Repository<ReminderPattern>, ruleRepo: Repository<ReminderRule>, eventRepo: Repository<Event>);
    createPattern(dto: CreatePatternDto): Promise<ReminderPattern>;
    findAll(): Promise<ReminderPattern[]>;
    findOne(id: string): Promise<ReminderPattern>;
    deletePattern(id: string): Promise<ReminderPattern>;
    applyPattern(eventId: string, patternId: string): Promise<ReminderRule[]>;
}
