import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationPreferences {
  @ApiProperty({ example: true })
  email: boolean;

  @ApiProperty({ example: true })
  push: boolean;

  @ApiProperty({ example: false })
  telegram: boolean;
}

@Entity('users')
export class User {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'John Doe', nullable: true })
  @Column({ nullable: true })
  name: string;

  @ApiProperty({ example: '1234567890', nullable: true })
  @Column({ nullable: true })
  googleId: string;

  @ApiProperty({ example: 'https://example.com/avatar.jpg', nullable: true })
  @Column({ nullable: true })
  avatar: string; // profile picture

  @ApiProperty({ example: '123456789', nullable: true })
  @Column({ nullable: true })
  telegramChatId: string;

  @ApiProperty({ example: 'America/New_York', nullable: true })
  @Column({ nullable: true })
  timezone: string;

  @ApiProperty({ type: NotificationPreferences })
  @Column({ type: 'jsonb', default: { email: true, push: true, telegram: false } })
  notificationPreferences: NotificationPreferences;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}