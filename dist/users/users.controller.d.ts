import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(user: User): User;
    updateProfile(user: User, updateProfileDto: UpdateProfileDto): Promise<User>;
}
