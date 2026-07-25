export declare class UpdateProfileDto {
    name?: string;
    avatar?: string;
    timezone?: string;
    notificationPreferences?: {
        email: boolean;
        telegram: boolean;
    };
}
