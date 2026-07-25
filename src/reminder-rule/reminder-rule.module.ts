import {
 Module
} from '@nestjs/common';


import {
 TypeOrmModule
} from '@nestjs/typeorm';


import {
 ReminderRule
} from './entities/reminder-rule.entity';


import {
 ReminderRuleService
} from './reminder-rule.service';


import {
 ReminderRuleController
} from './reminder-rule.controller';



import {
 EventsModule
} from '../events/events.module';



@Module({

 imports:[
  TypeOrmModule.forFeature([
    ReminderRule
  ]),
  EventsModule
 ],


 controllers:[
  ReminderRuleController
 ],


 providers:[
  ReminderRuleService
 ],


 exports:[
  ReminderRuleService
 ]

})
export class ReminderRuleModule{}