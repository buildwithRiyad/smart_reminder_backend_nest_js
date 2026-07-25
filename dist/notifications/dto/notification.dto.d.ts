import { NotificationType } from '../../common/enums/notification-type.enum';
export declare class NotificationDto {
    type: NotificationType;
    recipient: string;
    subject: string;
    message: string;
}
