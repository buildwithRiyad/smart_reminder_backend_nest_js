// src/reminder-patterns/reminder-pattern.controller.ts

import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ReminderPatternService } from './reminder-pattern.service';
import { CreatePatternDto } from './dto/create-pattern.dto';
import { UpdatePatternDto } from './dto/update-pattern.dto';
import { ApplyPatternDto } from './dto/apply-pattern.dto';

@Controller('reminder-patterns')
export class ReminderPatternController {
  constructor(private readonly service: ReminderPatternService) {}

  @Post()
  create(@Body() dto: CreatePatternDto) {
    return this.service.createPattern(dto);
  }

  @Get()
  findAll(@Query('userId') userId: string) {
    return this.service.findAllByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePatternDto) {
    return this.service.updatePattern(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.service.deletePattern(id);
  }

  // Apply pattern to an event – copies rules
  @Post(':id/apply')
  apply(@Param('id') patternId: string, @Body() dto: ApplyPatternDto) {
    return this.service.applyPatternToEvent(patternId, dto.eventId);
  }
}