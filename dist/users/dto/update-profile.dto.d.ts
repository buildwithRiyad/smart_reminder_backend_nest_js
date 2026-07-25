import { NotificationPreferences } from '../entities/user.entity';
export declare class UpdateProfileDto {
    name?: string;
    avatar?: string;
    timezone?: string;
    notificationPreferences?: NotificationPreferences;
}
