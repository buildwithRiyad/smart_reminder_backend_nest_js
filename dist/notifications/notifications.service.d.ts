import { MailService } from '../mail/mail.service';
import { TelegramService } from './telegram.service';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationsService {
    private readonly mailService;
    private readonly telegramService;
    private readonly logger;
    constructor(mailService: MailService, telegramService: TelegramService);
    send(notification: NotificationDto): Promise<void>;
}
