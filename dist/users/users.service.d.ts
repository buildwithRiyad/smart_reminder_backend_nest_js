import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByGoogleId(googleId: string): Promise<User | null>;
    create(data: Partial<User>): Promise<User>;
    update(id: string, data: UpdateProfileDto): Promise<User>;
    findOrCreateGoogleUser(profile: any): Promise<User>;
}
