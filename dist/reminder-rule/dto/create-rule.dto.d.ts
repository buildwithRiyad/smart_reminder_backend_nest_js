export declare class CreateRuleDto {
    eventId: string;
    amount: number;
    unit: 'MINUTE' | 'HOUR' | 'DAY';
    type: 'BEFORE' | 'AFTER';
}
