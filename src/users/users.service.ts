import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findByGoogleId(googleId: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { googleId } });
  }

  async create(data: Partial<User>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async update(id: string, data: UpdateProfileDto): Promise<User> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // Merge only allowed fields
    Object.assign(user, data);
    return this.userRepository.save(user);
  }

  /**
   * Find or create a user from Google OAuth profile
   */
  async findOrCreateGoogleUser(profile: any): Promise<User> {
    const { id: googleId, emails, displayName, photos } = profile;
    const email = emails?.[0]?.value;

    if (!email) {
      throw new Error('Google profile does not contain an email');
    }

    let user = await this.findByGoogleId(googleId);
    if (user) return user;

    user = await this.findByEmail(email);
    if (user) {
      // Link Google ID to existing account
      user.googleId = googleId;
      return this.userRepository.save(user);
    }

    // Create new user
    return this.create({
      email,
      googleId,
      name: displayName,
      avatar: photos?.[0]?.value,
      // Default preferences are set in the entity
    });
  }
}