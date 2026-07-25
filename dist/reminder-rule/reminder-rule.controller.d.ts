import { ReminderRuleService } from './reminder-rule.service';
import { CreateRuleDto } from './dto/create-rule.dto';
export declare class ReminderRuleController {
    private service;
    constructor(service: ReminderRuleService);
    create(dto: CreateRuleDto): Promise<import("./entities/reminder-rule.entity").ReminderRule>;
    delete(id: string): Promise<void>;
}
