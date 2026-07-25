import {
  Injectable,
} from '@nestjs/common';


import {
  InjectRepository,
} from '@nestjs/typeorm';


import {
  Repository,
} from 'typeorm';



import {
  Event,
} from './entities/event.entity';



import {
  User,
} from '../users/entities/user.entity';



import {
  CreateEventDto,
} from './dto/create-event.dto';



import {
  ReminderPatternService,
} from '../reminder-patterns/reminder-pattern.service';



@Injectable()
export class EventsService {


  constructor(


    @InjectRepository(Event)

    private readonly eventRepository:
    Repository<Event>,



    private readonly reminderPatternService:
    ReminderPatternService,


  ) {}





  async create(

    user: User,

    dto: CreateEventDto,

  ) {



    const event =

    await this.eventRepository.save({

      title:
      dto.title,


      description:
      dto.description,



      eventDate:

      new Date(
        dto.eventDate
      ),



      eventTime:
      dto.eventTime,



      timezone:
      dto.timezone || 'Asia/Dhaka',



      category:
      dto.category,



      isRecurring:
      dto.isRecurring || false,



      user,

    });





    // Apply Reminder Pattern

    if(dto.patternId){


      await this.reminderPatternService.applyPatternToEvent(

        dto.patternId,

        event.id,

      );


    }




    return event;


  }







  async findAll(

    userId:string,

  ) {



    return this.eventRepository.find({


      where: {

        user: {

          id:userId,

        },

      },


      order: {

        createdAt:'DESC',

      },


      relations:[

        'reminderRules',

      ],


    });


  }


}