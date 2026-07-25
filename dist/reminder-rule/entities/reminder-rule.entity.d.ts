import { Event } from '../../events/entities/event.entity';
export declare class ReminderRule {
    id: string;
    event: Event;
    amount: number;
    unit: string;
    type: string;
    createdAt: Date;
}
