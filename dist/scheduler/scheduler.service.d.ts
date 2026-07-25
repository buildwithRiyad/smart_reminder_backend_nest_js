import { RemindersService } from '../reminders/reminders.service';
import { NotificationsService } from '../notifications/notifications.service';
export declare class SchedulerService {
    private readonly remindersService;
    private readonly notificationsService;
    private readonly logger;
    constructor(remindersService: RemindersService, notificationsService: NotificationsService);
    handleReminderNotifications(): Promise<void>;
}
