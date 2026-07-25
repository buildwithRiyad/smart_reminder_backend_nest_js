import {
 Controller,
 Post,
 Body,
 Delete,
 Param
} from '@nestjs/common';



import {
 ReminderRuleService
} from './reminder-rule.service';



import {
 CreateRuleDto
} from './dto/create-rule.dto';



@Controller('reminder-rules')
export class ReminderRuleController{


constructor(
private service:
ReminderRuleService
){}




@Post()

create(
@Body()
dto:CreateRuleDto
){

return this.service.createRules(dto);

}




@Delete(':id')

delete(
@Param('id')
id:string
){

return this.service.deleteRules(id);

}


}