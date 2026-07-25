import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NotificationPreferences } from '../entities/user.entity';

export class UpdateProfileDto {
  @ApiPropertyOptional({ example: 'John Doe' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'https://example.com/new-avatar.jpg' })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiPropertyOptional({ example: 'America/New_York' })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({ type: NotificationPreferences })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => NotificationPreferences)
  notificationPreferences?: NotificationPreferences;
}