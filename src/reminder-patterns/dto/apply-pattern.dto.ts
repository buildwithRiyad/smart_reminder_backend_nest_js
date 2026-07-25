// src/reminder-patterns/dto/apply-pattern.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class ApplyPatternDto {
  @IsString()
  @IsNotEmpty()
  eventId: string;
}