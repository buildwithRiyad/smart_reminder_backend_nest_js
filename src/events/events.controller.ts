import {
 Controller,
 Post,
 Body,
 UseGuards,
 Get
} from '@nestjs/common';


import {
 JwtAuthGuard
} from '../common/guards/jwt-auth.guard';


import {
 CurrentUser
} from '../common/decorators/current-user.decorator';


import {
 CreateEventDto
} from './dto/create-event.dto';


import {
 EventsService
} from './events.service';


import {
 User
} from '../users/entities/user.entity';



@Controller('events')
@UseGuards(JwtAuthGuard)
export class EventsController{


constructor(
private readonly eventsService:EventsService
){}



@Post()
createEvent(
@CurrentUser() user:User,
@Body() dto:CreateEventDto
){

return this.eventsService.create(
user,
dto
);

}



@Get()
getEvents(
@CurrentUser() user:User
){

return this.eventsService.findAll(
user.id
);

}


}