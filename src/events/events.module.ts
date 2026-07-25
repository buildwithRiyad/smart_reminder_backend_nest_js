import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';


import { Event } from './entities/event.entity';


import { EventsController } from './events.controller';

import { EventsService } from './events.service';


import { ReminderPatternModule } from '../reminder-pattern/reminder-pattern.module';



@Module({

  imports: [

    TypeOrmModule.forFeature([
      Event,
    ]),


    ReminderPatternModule,

  ],



  controllers: [

    EventsController,

  ],



  providers: [

    EventsService,

  ],



  exports: [

    EventsService,

  ],


})
export class EventsModule {}