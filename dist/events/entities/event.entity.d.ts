import { User } from '../../users/entities/user.entity';
import { ReminderRule } from '../../reminder-rule/entities/reminder-rule.entity';
export declare class Event {
    id: string;
    title: string;
    description: string;
    eventDate: Date;
    eventTime: string;
    timezone: string;
    category: string;
    status: string;
    isRecurring: boolean;
    user: User;
    rules: ReminderRule[];
    deletedAt: Date;
    createdAt: Date;
}
