"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RemindersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemindersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reminder_entity_1 = require("./entities/reminder.entity");
const notification_type_enum_1 = require("../common/enums/notification-type.enum");
let RemindersService = RemindersService_1 = class RemindersService {
    constructor(reminderRepository) {
        this.reminderRepository = reminderRepository;
        this.logger = new common_1.Logger(RemindersService_1.name);
    }
    async create(createDto, user) {
        if (createDto.notificationType === notification_type_enum_1.NotificationType.EMAIL && !user?.email) {
            throw new common_1.BadRequestException('User does not have an email address. Cannot send email reminders.');
        }
        if (createDto.notificationType === notification_type_enum_1.NotificationType.TELEGRAM &&
            !user?.telegramChatId) {
            throw new common_1.BadRequestException('User does not have a Telegram chat ID. Cannot send Telegram reminders.');
        }
        const reminder = this.reminderRepository.create({
            title: createDto.title,
            description: createDto.message,
            eventDate: new Date(createDto.eventDate),
            notifyBefore: createDto.notifyBefore,
            notificationType: createDto.notificationType,
            user: user ? { id: user.id } : undefined,
            status: 'PENDING',
        });
        return await this.reminderRepository.save(reminder);
    }
    async findAll(userId) {
        const query = this.reminderRepository
            .createQueryBuilder('reminder')
            .leftJoinAndSelect('reminder.user', 'user')
            .orderBy('reminder.createdAt', 'DESC');
        if (userId) {
            query.where('user.id = :userId', { userId });
        }
        return query.getMany();
    }
    async findOne(id) {
        const reminder = await this.reminderRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!reminder) {
            throw new common_1.NotFoundException(`Reminder with ID ${id} not found`);
        }
        return reminder;
    }
    async findPendingNotifications() {
        return this.reminderRepository
            .createQueryBuilder('reminder')
            .leftJoinAndSelect('reminder.user', 'user')
            .where('reminder.status = :status', { status: 'PENDING' })
            .andWhere(`
        reminder.eventDate - (reminder.notifyBefore || ' minutes')::interval
        <= CURRENT_TIMESTAMP
        `)
            .orderBy('reminder.eventDate', 'ASC')
            .take(100)
            .getMany();
    }
    async markAsSent(id) {
        const reminder = await this.reminderRepository.findOne({ where: { id } });
        if (!reminder) {
            throw new common_1.NotFoundException(`Reminder with ID ${id} not found`);
        }
        reminder.status = 'SENT';
        await this.reminderRepository.save(reminder);
    }
    async markAsFailed(id) {
        const reminder = await this.reminderRepository.findOne({ where: { id } });
        if (!reminder) {
            throw new common_1.NotFoundException(`Reminder with ID ${id} not found`);
        }
        reminder.status = 'FAILED';
        await this.reminderRepository.save(reminder);
    }
    async remove(id) {
        const result = await this.reminderRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Reminder with ID ${id} not found`);
        }
    }
};
exports.RemindersService = RemindersService;
exports.RemindersService = RemindersService = RemindersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reminder_entity_1.Reminder)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RemindersService);
//# sourceMappingURL=reminders.service.js.map