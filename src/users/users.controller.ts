import {
 Controller,
 Get,
 Put,
 Body,
 UseGuards,
} from '@nestjs/common';


import {
 ApiBearerAuth,
 ApiTags,
 ApiOperation,
} from '@nestjs/swagger';


import {
 UsersService,
} from './users.service';


import {
 JwtAuthGuard,
} from '../common/guards/jwt-auth.guard';


import {
 CurrentUser,
} from '../common/decorators/current-user.decorator';


import {
 User,
} from './entities/user.entity';


import {
 UpdateProfileDto,
} from './dto/update-profile.dto';



@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {


constructor(
private readonly usersService:UsersService
){}




@Get('profile')
@ApiOperation({
summary:'Get current user profile'
})
getProfile(
@CurrentUser() user:User
){

return this.usersService.getProfile(
user.id
);

}




@Put('profile')
@ApiOperation({
summary:'Update user profile'
})
updateProfile(

@CurrentUser() user:User,

@Body()
dto:UpdateProfileDto

){

return this.usersService.updateProfile(
user.id,
dto
);

}



}