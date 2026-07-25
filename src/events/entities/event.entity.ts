import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { ReminderRule } from '../../reminder-rule/entities/reminder-rule.entity';


@Entity('events')
export class Event {


  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  title: string;


  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;


  @Column()
  eventDate: Date;


  @Column({
    nullable: true,
  })
  eventTime: string;


  @Column({
    default: 'Asia/Dhaka',
  })
  timezone: string;


  @Column()
  category: string;


  @Column({
    default: 'ACTIVE',
  })
  status: string;


  @Column({
    default: false,
  })
  isRecurring: boolean;



  // User Relation
  @ManyToOne(
    () => User,
    user => user.events,
    {
      onDelete: 'CASCADE',
    }
  )
  user: User;



  // Event -> Reminder Rules Relation
  @OneToMany(
    () => ReminderRule,
    rule => rule.event
  )
  rules: ReminderRule[];



  @DeleteDateColumn()
  deletedAt: Date;


  @CreateDateColumn()
  createdAt: Date;

}