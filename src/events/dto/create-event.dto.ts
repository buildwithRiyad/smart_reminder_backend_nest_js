import {
  IsString,
  IsDateString,
  IsOptional,
  IsBoolean,
  IsUUID,
} from 'class-validator';


export class CreateEventDto {


  @IsString()
  title:string;



  @IsOptional()
  @IsString()
  description?:string;



  @IsDateString()
  eventDate:string;



  @IsOptional()
  @IsString()
  eventTime?:string;



  @IsOptional()
  @IsString()
  timezone?:string;



  @IsString()
  category:string;



  @IsOptional()
  @IsBoolean()
  isRecurring?:boolean;



  // Reminder Pattern
  @IsOptional()
  @IsUUID()
  patternId?:string;


}