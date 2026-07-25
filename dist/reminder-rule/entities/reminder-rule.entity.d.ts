import { Event } from '../../events/entities/event.entity';
import { ReminderPattern } from '../../reminder-patterns/entities/reminder-pattern.entity';
export declare class ReminderRule {
    id: string;
    eventId: string | null;
    event: Event | null;
    patternId: string | null;
    pattern: ReminderPattern | null;
    amount: number;
    unit: 'MINUTE' | 'HOUR' | 'DAY';
    type: 'BEFORE' | 'AFTER';
    channel: 'EMAIL' | 'TELEGRAM';
    createdAt: Date;
    updatedAt: Date;
}
