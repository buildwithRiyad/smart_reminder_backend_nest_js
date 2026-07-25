import { Repository } from 'typeorm';
import { ReminderPattern } from './entities/reminder-pattern.entity';
import { ReminderRule } from '../reminder-rule/entities/reminder-rule.entity';
import { Event } from '../events/entities/event.entity';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { UpdatePatternDto } from './dto/update-pattern.dto';
export declare class ReminderPatternService {
    private readonly patternRepo;
    private readonly ruleRepo;
    private readonly eventRepo;
    constructor(patternRepo: Repository<ReminderPattern>, ruleRepo: Repository<ReminderRule>, eventRepo: Repository<Event>);
    createPattern(dto: CreatePatternDto): Promise<ReminderPattern>;
    findAllByUser(userId: string): Promise<ReminderPattern[]>;
    findOne(id: string): Promise<ReminderPattern>;
    updatePattern(id: string, dto: UpdatePatternDto): Promise<ReminderPattern>;
    deletePattern(id: string): Promise<void>;
    applyPatternToEvent(patternId: string, eventId: string): Promise<ReminderRule[]>;
}
