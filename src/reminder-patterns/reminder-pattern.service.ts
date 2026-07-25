// src/reminder-pattern/reminder-pattern.service.ts

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


import {
  ReminderPattern,
} from './entities/reminder-pattern.entity';


import {
  ReminderRule,
} from '../reminder-rule/entities/reminder-rule.entity';


import {
  Event,
} from '../events/entities/event.entity';


import {
  CreatePatternDto,
} from './dto/create-pattern.dto';


import {
  UpdatePatternDto,
} from './dto/update-pattern.dto';



@Injectable()
export class ReminderPatternService {


  constructor(

    @InjectRepository(ReminderPattern)
    private readonly patternRepo:
    Repository<ReminderPattern>,


    @InjectRepository(ReminderRule)
    private readonly ruleRepo:
    Repository<ReminderRule>,


    @InjectRepository(Event)
    private readonly eventRepo:
    Repository<Event>,

  ) {}



  // =========================
  // CREATE PATTERN
  // =========================

  async createPattern(
    dto: CreatePatternDto,
  ): Promise<ReminderPattern> {


    const pattern =
      this.patternRepo.create({

        userId: dto.userId,

        name: dto.name,

        description: dto.description,

      });



    const savedPattern =
      await this.patternRepo.save(
        pattern,
      );



    const rules =
      dto.rules.map((rule) =>

        this.ruleRepo.create({

          amount: rule.amount,

          unit: rule.unit,

          type: rule.type,

          channel:
          rule.channel || 'EMAIL',


          pattern: savedPattern,

        })

      );



    await this.ruleRepo.save(
      rules,
    );



    return this.findOne(
      savedPattern.id,
    );

  }






  // =========================
  // FIND ALL USER PATTERNS
  // =========================

  async findAllByUser(
    userId: string,
  ): Promise<ReminderPattern[]> {


    return this.patternRepo.find({

      where: {
        userId,
      },


      relations: [
        'rules',
      ],


      order: {
        createdAt: 'DESC',
      },

    });

  }






  // =========================
  // FIND ONE
  // =========================

  async findOne(
    id: string,
  ): Promise<ReminderPattern> {


    const pattern =
      await this.patternRepo.findOne({

        where: {
          id,
        },


        relations: [
          'rules',
        ],

      });



    if (!pattern) {

      throw new NotFoundException(
        `Pattern with ID "${id}" not found`,
      );

    }



    return pattern;

  }






  // =========================
  // UPDATE PATTERN
  // =========================

  async updatePattern(
    id: string,
    dto: UpdatePatternDto,
  ): Promise<ReminderPattern> {


    const pattern =
      await this.findOne(id);



    if (dto.name) {

      pattern.name =
      dto.name;

    }



    if (dto.description !== undefined) {

      pattern.description =
      dto.description;

    }



    return this.patternRepo.save(
      pattern,
    );

  }






  // =========================
  // DELETE PATTERN
  // =========================

  async deletePattern(
    id: string,
  ): Promise<void> {


    const pattern =
      await this.findOne(id);



    await this.patternRepo.remove(
      pattern,
    );

  }






  // =========================
  // APPLY PATTERN TO EVENT
  // =========================

  async applyPatternToEvent(

    patternId: string,

    eventId: string,

  ): Promise<ReminderRule[]> {



    const pattern =
      await this.patternRepo.findOne({

        where: {
          id: patternId,
        },


        relations: [
          'rules',
        ],

      });



    if (!pattern) {

      throw new NotFoundException(
        `Pattern with ID "${patternId}" not found`,
      );

    }




    const event =
      await this.eventRepo.findOne({

        where: {
          id: eventId,
        },

      });



    if (!event) {

      throw new NotFoundException(
        `Event with ID "${eventId}" not found`,
      );

    }




    const copiedRules =
      pattern.rules.map((rule) =>


        this.ruleRepo.create({

          amount: rule.amount,

          unit: rule.unit,

          type: rule.type,

          channel:
          rule.channel || 'EMAIL',


          event,

        })


      );




    return this.ruleRepo.save(
      copiedRules,
    );


  }


}