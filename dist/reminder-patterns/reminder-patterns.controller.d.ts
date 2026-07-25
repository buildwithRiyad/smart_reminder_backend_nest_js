import { ReminderPatternService } from './reminder-pattern.service';
import { CreatePatternDto } from './dto/create-pattern.dto';
export declare class ReminderPatternController {
    private readonly service;
    constructor(service: ReminderPatternService);
    create(dto: CreatePatternDto): any;
    findAll(): any;
    findOne(id: string): any;
    delete(id: string): any;
    applyPattern(patternId: string, eventId: string): any;
}
