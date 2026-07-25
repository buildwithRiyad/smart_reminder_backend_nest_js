import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
export declare class RemindersController {
    private readonly remindersService;
    constructor(remindersService: RemindersService);
    create(createDto: CreateReminderDto, req: any): Promise<import("./entities/reminder.entity").Reminder>;
    findAll(req: any): Promise<import("./entities/reminder.entity").Reminder[]>;
    getPending(): Promise<import("./entities/reminder.entity").Reminder[]>;
    findOne(id: number): Promise<import("./entities/reminder.entity").Reminder>;
    remove(id: number): Promise<void>;
}
