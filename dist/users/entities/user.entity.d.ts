export declare class NotificationPreferences {
    email: boolean;
    push: boolean;
    telegram: boolean;
}
export declare class User {
    id: string;
    email: string;
    name: string;
    googleId: string;
    avatar: string;
    telegramChatId: string;
    timezone: string;
    notificationPreferences: NotificationPreferences;
    createdAt: Date;
    updatedAt: Date;
}
