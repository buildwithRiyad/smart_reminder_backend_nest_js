import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(user: User): Promise<User>;
    updateProfile(user: User, dto: UpdateProfileDto): Promise<User>;
}
