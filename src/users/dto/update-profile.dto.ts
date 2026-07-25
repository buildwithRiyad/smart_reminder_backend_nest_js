import {
  IsOptional,
  IsString,
  IsObject,
  IsBoolean,
} from 'class-validator';


export class UpdateProfileDto {


  @IsOptional()
  @IsString()
  name?: string;


  @IsOptional()
  @IsString()
  avatar?: string;


  @IsOptional()
  @IsString()
  timezone?: string;


  @IsOptional()
  @IsObject()
  notificationPreferences?: {
    email:boolean;
    telegram:boolean;
  };

}