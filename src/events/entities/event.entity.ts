import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';


@Entity('events')
export class Event {


  @PrimaryGeneratedColumn('uuid')
  id:string;


  @Column()
  title:string;


  @Column({
    type:'text',
    nullable:true
  })
  description:string;


  @Column()
  eventDate:Date;


  @Column({
    nullable:true
  })
  eventTime:string;


  @Column({
    default:'Asia/Dhaka'
  })
  timezone:string;


  @Column()
  category:string;


  @Column({
    default:'ACTIVE'
  })
  status:string;


  @Column({
    default:false
  })
  isRecurring:boolean;


  @ManyToOne(
    ()=>User,
    user=>user.events,
    {
      onDelete:'CASCADE'
    }
  )
  user:User;


  @DeleteDateColumn()
  deletedAt:Date;


  @CreateDateColumn()
  createdAt:Date;

}