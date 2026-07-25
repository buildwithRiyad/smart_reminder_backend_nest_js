import { User } from '../../users/entities/user.entity';
export declare class Reminder {
    id: number;
    title: string;
    description: string;
    eventDate: Date;
    status: string;
    notificationType: string;
    notifyBefore: number;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
