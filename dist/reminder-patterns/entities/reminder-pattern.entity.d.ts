import { ReminderRule } from '../../reminder-rule/entities/reminder-rule.entity';
export declare class ReminderPattern {
    id: string;
    userId: string;
    name: string;
    description: string;
    rules: ReminderRule[];
    createdAt: Date;
    updatedAt: Date;
}
