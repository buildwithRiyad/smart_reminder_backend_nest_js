import {
 Injectable
} from '@nestjs/common';


import {
 InjectRepository
} from '@nestjs/typeorm';


import {
 Repository
} from 'typeorm';


import {
 Event
} from './entities/event.entity';


import {
 User
} from '../users/entities/user.entity';


import {
 CreateEventDto
} from './dto/create-event.dto';



@Injectable()
export class EventsService{


constructor(

@InjectRepository(Event)
private eventRepository:Repository<Event>

){}



async create(
user:User,
dto:CreateEventDto
){


const event =
this.eventRepository.create({

...dto,

eventDate:
new Date(dto.eventDate),

timezone:
dto.timezone || 'Asia/Dhaka',

user

});


return this.eventRepository.save(event);

}



async findAll(
userId:string
){

return this.eventRepository.find({

where:{
 user:{
  id:userId
 }
},

order:{
 createdAt:'DESC'
}

});


}


}