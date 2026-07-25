import {
 Injectable,
 NotFoundException
} from '@nestjs/common';


import {
 InjectRepository
} from '@nestjs/typeorm';


import {
 Repository
} from 'typeorm';


import {
 ReminderRule
} from './entities/reminder-rule.entity';



import {
 Event
} from '../events/entities/event.entity';



import {
 CreateRuleDto
} from './dto/create-rule.dto';



@Injectable()
export class ReminderRuleService{


constructor(

@InjectRepository(ReminderRule)
private ruleRepo:
Repository<ReminderRule>,


@InjectRepository(Event)
private eventRepo:
Repository<Event>


){}




// Create Rule

async createRules(
dto:CreateRuleDto
){


const event =
await this.eventRepo.findOne({

where:{
 id:dto.eventId
}

});



if(!event){

throw new NotFoundException(
"Event not found"
);

}



const rule =
this.ruleRepo.create({

amount:dto.amount,

unit:dto.unit,

type:dto.type,

event

});



return this.ruleRepo.save(rule);


}






// Calculate Notification Date


calculateReminderDate(

eventDate:Date,

amount:number,

unit:string,

type:string

){



const date =
new Date(eventDate);




if(type==="BEFORE"){


switch(unit){


case "DAY":

date.setDate(
date.getDate()-amount
);

break;



case "HOUR":

date.setHours(
date.getHours()-amount
);

break;



case "MINUTE":

date.setMinutes(
date.getMinutes()-amount
);

break;


}


}




if(type==="AFTER"){


switch(unit){


case "DAY":

date.setDate(
date.getDate()+amount
);

break;



case "HOUR":

date.setHours(
date.getHours()+amount
);

break;



case "MINUTE":

date.setMinutes(
date.getMinutes()+amount
);

break;


}



}



return date;


}







// Delete Rule


async deleteRules(
id:string
){


const rule =
await this.ruleRepo.findOne({

where:{
 id
}

});



if(!rule){

throw new NotFoundException(
"Rule not found"
);

}



return this.ruleRepo.remove(rule);


}


}