import { ReminderPattern } from "./ReminderPattern";
import { TimeUnit, RuleType } from "./ReminderRule";
export declare class ReminderPatternRule {
    id: string;
    patternId: string;
    amount: number;
    unit: TimeUnit;
    type: RuleType;
    pattern: ReminderPattern;
}
