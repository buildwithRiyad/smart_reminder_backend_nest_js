import {
 IsUUID,
 IsEnum,
 IsNumber
} from 'class-validator';



export class CreateRuleDto{


 @IsUUID()
 eventId:string;



 @IsNumber()
 amount:number;



 @IsEnum([
  'MINUTE',
  'HOUR',
  'DAY'
 ])
 unit:string;



 @IsEnum([
  'BEFORE',
  'AFTER'
 ])
 type:string;


}