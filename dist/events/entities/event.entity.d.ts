import { User } from '../../users/entities/user.entity';
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
    deletedAt: Date;
    createdAt: Date;
}
