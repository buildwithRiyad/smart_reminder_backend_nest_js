// src/events/events.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { ReminderPatternModule } from '../reminder-patterns/reminder-pattern.module'; // ✅ plural

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    ReminderPatternModule,
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}