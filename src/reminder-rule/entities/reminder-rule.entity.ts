import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Event } from '../../events/entities/event.entity';
import { ReminderPattern } from '../../reminder-patterns/entities/reminder-pattern.entity';

@Entity('reminder_rules')
export class ReminderRule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ======================
  // Event Relation
  // ======================
  @Column({ name: 'event_id', nullable: true })
  eventId: string | null;

  @ManyToOne(
    () => Event,
    (event: Event) => event.rules, // ✅ type explicit
    { nullable: true, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'event_id' })
  event: Event | null;

  // ======================
  // Pattern Relation
  // ======================
  @Column({ name: 'pattern_id', nullable: true })
  patternId: string | null;

  @ManyToOne(
    () => ReminderPattern,
    (pattern: ReminderPattern) => pattern.rules, // ✅ type explicit
    { nullable: true, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'pattern_id' })
  pattern: ReminderPattern | null;

  // ======================
  // Rule Properties
  // ======================
  @Column()
  amount: number;

  @Column({
    type: 'enum',
    enum: ['MINUTE', 'HOUR', 'DAY'],
  })
  unit: 'MINUTE' | 'HOUR' | 'DAY';

  @Column({
    type: 'enum',
    enum: ['BEFORE', 'AFTER'],
  })
  type: 'BEFORE' | 'AFTER';

  @Column({
    type: 'enum',
    enum: ['EMAIL', 'TELEGRAM'],
    default: 'EMAIL',
  })
  channel: 'EMAIL' | 'TELEGRAM';

  // ======================
  // Timestamps
  // ======================
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}