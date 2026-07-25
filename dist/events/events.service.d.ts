import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { User } from '../users/entities/user.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { ReminderPatternService } from '../reminder-patterns/reminder-pattern.service';
export declare class EventsService {
    private readonly eventRepository;
    private readonly reminderPatternService;
    constructor(eventRepository: Repository<Event>, reminderPatternService: ReminderPatternService);
    create(user: User, dto: CreateEventDto): Promise<{
        title: string;
        description: string | undefined;
        eventDate: Date;
        eventTime: string | undefined;
        timezone: string;
        category: string;
        isRecurring: boolean;
        user: User;
    } & Event>;
    findAll(userId: string): Promise<Event[]>;
}
