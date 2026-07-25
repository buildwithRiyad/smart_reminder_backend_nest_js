import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    findOrCreateGoogleUser(profile: any): Promise<User>;
    getProfile(id: string): Promise<User>;
    updateProfile(id: string, dto: UpdateProfileDto): Promise<User>;
}
