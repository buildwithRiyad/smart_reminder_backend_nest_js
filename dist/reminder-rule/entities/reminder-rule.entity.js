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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderRule = void 0;
const typeorm_1 = require("typeorm");
const event_entity_1 = require("../../events/entities/event.entity");
const reminder_pattern_entity_1 = require("../../reminder-patterns/entities/reminder-pattern.entity");
let ReminderRule = class ReminderRule {
};
exports.ReminderRule = ReminderRule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ReminderRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'event_id',
        nullable: true
    }),
    __metadata("design:type", String)
], ReminderRule.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, event => event.rules, {
        nullable: true,
        onDelete: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'event_id'
    }),
    __metadata("design:type", event_entity_1.Event)
], ReminderRule.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'pattern_id',
        nullable: true
    }),
    __metadata("design:type", String)
], ReminderRule.prototype, "patternId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => reminder_pattern_entity_1.ReminderPattern, pattern => pattern.rules, {
        nullable: true,
        onDelete: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'pattern_id'
    }),
    __metadata("design:type", reminder_pattern_entity_1.ReminderPattern)
], ReminderRule.prototype, "pattern", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ReminderRule.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: [
            'MINUTE',
            'HOUR',
            'DAY'
        ]
    }),
    __metadata("design:type", String)
], ReminderRule.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: [
            'BEFORE',
            'AFTER'
        ]
    }),
    __metadata("design:type", String)
], ReminderRule.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: [
            'EMAIL',
            'TELEGRAM'
        ],
        default: 'EMAIL'
    }),
    __metadata("design:type", String)
], ReminderRule.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at'
    }),
    __metadata("design:type", Date)
], ReminderRule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at'
    }),
    __metadata("design:type", Date)
], ReminderRule.prototype, "updatedAt", void 0);
exports.ReminderRule = ReminderRule = __decorate([
    (0, typeorm_1.Entity)('reminder_rules')
], ReminderRule);
//# sourceMappingURL=reminder-rule.entity.js.map