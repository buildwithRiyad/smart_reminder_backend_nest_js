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
exports.ReminderRuleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reminder_rule_entity_1 = require("./entities/reminder-rule.entity");
const event_entity_1 = require("../events/entities/event.entity");
let ReminderRuleService = class ReminderRuleService {
    constructor(ruleRepo, eventRepo) {
        this.ruleRepo = ruleRepo;
        this.eventRepo = eventRepo;
    }
    async createRules(dto) {
        const event = await this.eventRepo.findOne({
            where: {
                id: dto.eventId
            }
        });
        if (!event) {
            throw new common_1.NotFoundException("Event not found");
        }
        const rule = this.ruleRepo.create({
            amount: dto.amount,
            unit: dto.unit,
            type: dto.type,
            event
        });
        return this.ruleRepo.save(rule);
    }
    calculateReminderDate(eventDate, amount, unit, type) {
        const date = new Date(eventDate);
        if (type === "BEFORE") {
            switch (unit) {
                case "DAY":
                    date.setDate(date.getDate() - amount);
                    break;
                case "HOUR":
                    date.setHours(date.getHours() - amount);
                    break;
                case "MINUTE":
                    date.setMinutes(date.getMinutes() - amount);
                    break;
            }
        }
        if (type === "AFTER") {
            switch (unit) {
                case "DAY":
                    date.setDate(date.getDate() + amount);
                    break;
                case "HOUR":
                    date.setHours(date.getHours() + amount);
                    break;
                case "MINUTE":
                    date.setMinutes(date.getMinutes() + amount);
                    break;
            }
        }
        return date;
    }
    async deleteRules(id) {
        const rule = await this.ruleRepo.findOne({
            where: {
                id
            }
        });
        if (!rule) {
            throw new common_1.NotFoundException("Rule not found");
        }
        return this.ruleRepo.remove(rule);
    }
};
exports.ReminderRuleService = ReminderRuleService;
exports.ReminderRuleService = ReminderRuleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reminder_rule_entity_1.ReminderRule)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReminderRuleService);
//# sourceMappingURL=reminder-rule.service.js.map