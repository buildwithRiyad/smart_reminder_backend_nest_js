// src/reminder-rule/dto/create-rule.dto.ts
import { IsUUID, IsNumber, IsEnum } from 'class-validator';

export class CreateRuleDto {
  @IsUUID()
  eventId: string;

  @IsNumber()
  amount: number;

  @IsEnum(['MINUTE', 'HOUR', 'DAY'])
  unit: 'MINUTE' | 'HOUR' | 'DAY'; // ✅ ইউনিয়ন টাইপ

  @IsEnum(['BEFORE', 'AFTER'])
  type: 'BEFORE' | 'AFTER'; // ✅ ইউনিয়ন টাইপ
}