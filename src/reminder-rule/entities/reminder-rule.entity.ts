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
import { ReminderPattern } from '../../reminder-pattern/entities/reminder-pattern.entity';



@Entity('reminder_rules')
export class ReminderRule {


 @PrimaryGeneratedColumn('uuid')
 id: string;



 // ======================
 // Event Relation
 // ======================

 @Column({
   name:'event_id',
   nullable:true
 })
 eventId:string;



 @ManyToOne(
   ()=>Event,
   event=>event.rules,
   {
    nullable:true,
    onDelete:'CASCADE'
   }
 )
 @JoinColumn({
   name:'event_id'
 })
 event:Event;



 // ======================
 // Pattern Relation
 // ======================

 @Column({
   name:'pattern_id',
   nullable:true
 })
 patternId:string;



 @ManyToOne(
   ()=>ReminderPattern,
   pattern=>pattern.rules,
   {
    nullable:true,
    onDelete:'CASCADE'
   }
 )
 @JoinColumn({
   name:'pattern_id'
 })
 pattern:ReminderPattern;



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



 @Column({
   type:'enum',
   enum:[
    'EMAIL',
    'TELEGRAM'
   ],
   default:'EMAIL'
 })
 channel:string;



 @CreateDateColumn({
   name:'created_at'
 })
 createdAt:Date;



 @UpdateDateColumn({
   name:'updated_at'
 })
 updatedAt:Date;


}