declare class RuleInputDto {
    amount: number;
    unit: 'MINUTE' | 'HOUR' | 'DAY';
    type: 'BEFORE' | 'AFTER';
    channel?: 'EMAIL' | 'TELEGRAM';
}
export declare class CreatePatternDto {
    userId: string;
    name: string;
    description?: string;
    rules: RuleInputDto[];
}
export {};
