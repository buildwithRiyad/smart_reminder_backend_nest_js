import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { User } from '../users/entities/user.entity';
import { CreateEventDto } from './dto/create-event.dto';
export declare class EventsService {
    private eventRepository;
    constructor(eventRepository: Repository<Event>);
    create(user: User, dto: CreateEventDto): Promise<Event>;
    findAll(userId: string): Promise<Event[]>;
}
