import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
import { User } from '../users/entities/user.entity';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    createEvent(user: User, dto: CreateEventDto): Promise<{
        title: string;
        description: string | undefined;
        eventDate: Date;
        eventTime: string | undefined;
        timezone: string;
        category: string;
        isRecurring: boolean;
        user: User;
    } & import("./entities/event.entity").Event>;
    getEvents(user: User): Promise<import("./entities/event.entity").Event[]>;
}
