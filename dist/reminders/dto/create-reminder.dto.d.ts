import { NotificationType } from '../../common/enums/notification-type.enum';
export declare class CreateReminderDto {
    title: string;
    message: string;
    eventDate: string;
    notifyBefore: number;
    notificationType: NotificationType;
}
