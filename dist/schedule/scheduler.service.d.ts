import { RemindersService } from '../reminders/reminders.service';
import { MailService } from '../mail/mail.service';
export declare class SchedulerService {
    private readonly remindersService;
    private readonly mailService;
    private readonly logger;
    constructor(remindersService: RemindersService, mailService: MailService);
    handleReminderCron(): Promise<void>;
}
