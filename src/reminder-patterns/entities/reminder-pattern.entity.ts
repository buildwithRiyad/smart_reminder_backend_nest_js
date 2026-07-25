// src/reminder-pattern/entities/reminder-pattern.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ReminderRule } from '../../reminder-rule/entities/reminder-rule.entity';


@Entity('reminder_patterns')
export class ReminderPattern {


  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({
    name: 'user_id',
  })
  userId: string;


  @Column()
  name: string;


  @Column({
    nullable: true,
  })
  description: string;


  @OneToMany(
    () => ReminderRule,
    (rule: ReminderRule) => rule.pattern,
    {
      cascade: true,
    },
  )
  rules: ReminderRule[];


  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;


  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

}