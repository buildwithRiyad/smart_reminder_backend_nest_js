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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderPatternService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reminder_pattern_entity_1 = require("./entities/reminder-pattern.entity");
const reminder_rule_entity_1 = require("../reminder-rule/entities/reminder-rule.entity");
const event_entity_1 = require("../events/entities/event.entity");
let ReminderPatternService = class ReminderPatternService {
    constructor(patternRepo, ruleRepo, eventRepo) {
        this.patternRepo = patternRepo;
        this.ruleRepo = ruleRepo;
        this.eventRepo = eventRepo;
    }
    async createPattern(dto) {
        const pattern = this.patternRepo.create({
            userId: dto.userId,
            name: dto.name,
            description: dto.description,
        });
        const savedPattern = await this.patternRepo.save(pattern);
        const rules = dto.rules.map((rule) => this.ruleRepo.create({
            amount: rule.amount,
            unit: rule.unit,
            type: rule.type,
            channel: rule.channel || 'EMAIL',
            pattern: savedPattern,
        }));
        await this.ruleRepo.save(rules);
        return this.findOne(savedPattern.id);
    }
    async findAllByUser(userId) {
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
    async findOne(id) {
        const pattern = await this.patternRepo.findOne({
            where: {
                id,
            },
            relations: [
                'rules',
            ],
        });
        if (!pattern) {
            throw new common_1.NotFoundException(`Pattern with ID "${id}" not found`);
        }
        return pattern;
    }
    async updatePattern(id, dto) {
        const pattern = await this.findOne(id);
        if (dto.name) {
            pattern.name =
                dto.name;
        }
        if (dto.description !== undefined) {
            pattern.description =
                dto.description;
        }
        return this.patternRepo.save(pattern);
    }
    async deletePattern(id) {
        const pattern = await this.findOne(id);
        await this.patternRepo.remove(pattern);
    }
    async applyPatternToEvent(patternId, eventId) {
        const pattern = await this.patternRepo.findOne({
            where: {
                id: patternId,
            },
            relations: [
                'rules',
            ],
        });
        if (!pattern) {
            throw new common_1.NotFoundException(`Pattern with ID "${patternId}" not found`);
        }
        const event = await this.eventRepo.findOne({
            where: {
                id: eventId,
            },
        });
        if (!event) {
            throw new common_1.NotFoundException(`Event with ID "${eventId}" not found`);
        }
        const copiedRules = pattern.rules.map((rule) => this.ruleRepo.create({
            amount: rule.amount,
            unit: rule.unit,
            type: rule.type,
            channel: rule.channel || 'EMAIL',
            event,
        }));
        return this.ruleRepo.save(copiedRules);
    }
};
exports.ReminderPatternService = ReminderPatternService;
exports.ReminderPatternService = ReminderPatternService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reminder_pattern_entity_1.ReminderPattern)),
    __param(1, (0, typeorm_1.InjectRepository)(reminder_rule_entity_1.ReminderRule)),
    __param(2, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReminderPatternService);
//# sourceMappingURL=reminder-pattern.service.js.map