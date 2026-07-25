// src/reminder-patterns/dto/create-pattern.dto.ts

import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class RuleInputDto {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  unit: 'MINUTE' | 'HOUR' | 'DAY';

  @IsNotEmpty()
  type: 'BEFORE' | 'AFTER';

  @IsString()
  channel?: 'EMAIL' | 'TELEGRAM'; // optional, default set in entity
}

export class CreatePatternDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RuleInputDto)
  rules: RuleInputDto[];
}