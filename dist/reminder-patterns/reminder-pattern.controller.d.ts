import { ReminderPatternService } from './reminder-pattern.service';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { UpdatePatternDto } from './dto/update-pattern.dto';
import { ApplyPatternDto } from './dto/apply-pattern.dto';
export declare class ReminderPatternController {
    private readonly service;
    constructor(service: ReminderPatternService);
    create(dto: CreatePatternDto): Promise<import("./entities/reminder-pattern.entity").ReminderPattern>;
    findAll(userId: string): Promise<import("./entities/reminder-pattern.entity").ReminderPattern[]>;
    findOne(id: string): Promise<import("./entities/reminder-pattern.entity").ReminderPattern>;
    update(id: string, dto: UpdatePatternDto): Promise<import("./entities/reminder-pattern.entity").ReminderPattern>;
    remove(id: string): Promise<void>;
    apply(patternId: string, dto: ApplyPatternDto): Promise<import("../reminder-rule/entities/reminder-rule.entity").ReminderRule[]>;
}
