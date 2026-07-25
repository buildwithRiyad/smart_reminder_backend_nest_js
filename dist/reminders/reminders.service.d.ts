import { Repository } from 'typeorm';
import { Reminder } from './entities/reminder.entity';
import { CreateReminderDto } from './dto/create-reminder.dto';
export declare class RemindersService {
    private readonly reminderRepository;
    private readonly logger;
    constructor(reminderRepository: Repository<Reminder>);
    create(createDto: CreateReminderDto, user?: any): Promise<Reminder>;
    findAll(userId?: number): Promise<Reminder[]>;
    findOne(id: number): Promise<Reminder>;
    findPendingNotifications(): Promise<Reminder[]>;
    markAsSent(id: number): Promise<void>;
    markAsFailed(id: number): Promise<void>;
    remove(id: number): Promise<void>;
}
