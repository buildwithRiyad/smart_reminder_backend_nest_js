// src/reminder-patterns/dto/update-pattern.dto.ts

import { IsString, IsOptional } from 'class-validator';

export class UpdatePatternDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}