import {
 Entity,
 PrimaryGeneratedColumn,
 Column,
 ManyToOne,
 CreateDateColumn
} from 'typeorm';

import { Event } from '../../events/entities/event.entity';


@Entity('reminder_rules')
export class ReminderRule {


 @PrimaryGeneratedColumn('uuid')
 id:string;



 @ManyToOne(
   ()=>Event,
   event=>event.rules,
   {
    onDelete:'CASCADE'
   }
 )
 event:Event;



 @Column()
 amount:number;



 @Column({
   type:'enum',
   enum:[
    'MINUTE',
    'HOUR',
    'DAY'
   ]
 })
 unit:string;



 @Column({
   type:'enum',
   enum:[
    'BEFORE',
    'AFTER'
   ]
 })
 type:string;



 @CreateDateColumn()
 createdAt:Date;

}