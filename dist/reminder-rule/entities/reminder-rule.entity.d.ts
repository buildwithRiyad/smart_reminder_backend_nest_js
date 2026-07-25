import { Event } from '../../events/entities/event.entity';
import { ReminderPattern } from '../../reminder-patterns/entities/reminder-pattern.entity';
export declare class ReminderRule {
    id: string;
    eventId: string;
    event: Event;
    patternId: string;
    pattern: ReminderPattern;
    amount: number;
    unit: string;
    type: string;
    channel: string;
    createdAt: Date;
    updatedAt: Date;
}
