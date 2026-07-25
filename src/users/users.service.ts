import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  InjectRepository,
} from '@nestjs/typeorm';

import {
  Repository,
} from 'typeorm';

import { User } from './entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  /**
   * Find user by email
   * Used during Google OAuth login
   */
  async findByEmail(
    email: string,
  ): Promise<User | null> {

    return this.userRepository.findOne({
      where: {
        email,
      },
    });

  }



  /**
   * Find user by ID
   * Used by JwtStrategy
   */
  async findById(
    id: string,
  ): Promise<User | null> {

    return this.userRepository.findOne({
      where: {
        id,
      },
    });

  }



  /**
   * Create or update user from Google OAuth
   */
  async findOrCreateGoogleUser(
    profile: any,
  ): Promise<User> {


    const {
      id: googleId,
      emails,
      displayName,
      photos,
    } = profile;


    const email =
      emails?.[0]?.value;


    const name =
      displayName || email;


    const avatar =
      photos?.[0]?.value || null;



    let user =
      await this.findByEmail(email);



    // New Google user
    if (!user) {


      user =
        this.userRepository.create({

          googleId,

          email,

          name,

          avatar,

          timezone: 'Asia/Dhaka',

          notificationPreferences: {
            email: true,
            telegram: false,
          },

        });


      return this.userRepository.save(user);

    }



    // Existing user but googleId missing
    if (!user.googleId) {


      user.googleId = googleId;

      user.name = name;

      user.avatar = avatar;


      return this.userRepository.save(user);

    }



    return user;

  }




  /**
   * Get current user profile
   */
  async getProfile(
    id: string,
  ): Promise<User> {


    const user =
      await this.findById(id);



    if (!user) {

      throw new NotFoundException(
        'User not found',
      );

    }



    return user;

  }




  /**
   * Update user profile
   */
  async updateProfile(
    id: string,
    dto: UpdateProfileDto,
  ): Promise<User> {


    const user =
      await this.getProfile(id);



    Object.assign(
      user,
      dto,
    );



    return this.userRepository.save(user);

  }



}