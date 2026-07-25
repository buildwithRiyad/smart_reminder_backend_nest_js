import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Event } from '../../events/entities/event.entity';


@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({
    unique: true,
  })
  googleId: string;


  @Column()
  name: string;


  @Column({
    unique: true,
  })
  email: string;


  @Column({
    nullable: true,
  })
  avatar: string;


  @Column({
    nullable: true,
  })
  telegramChatId: string;


  @Column({
    default: 'Asia/Dhaka',
  })
  timezone: string;


  @Column({
    type: 'jsonb',
    default: {
      email: true,
      telegram: false,
    },
  })
  notificationPreferences: {
    email: boolean;
    telegram: boolean;
  };


  // User -> Events Relation
  @OneToMany(
    () => Event,
    event => event.user
  )
  events: Event[];


  @CreateDateColumn()
  createdAt: Date;


  @UpdateDateColumn()
  updatedAt: Date;

}