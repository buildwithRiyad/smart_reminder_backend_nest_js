import { Event } from '../../events/entities/event.entity';
export declare class User {
    id: string;
    googleId: string;
    name: string;
    email: string;
    avatar: string;
    telegramChatId: string;
    timezone: string;
    notificationPreferences: {
        email: boolean;
        telegram: boolean;
    };
    events: Event[];
    createdAt: Date;
    updatedAt: Date;
}
