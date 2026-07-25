"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderPatternModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reminder_pattern_entity_1 = require("./entities/reminder-pattern.entity");
const reminder_rule_entity_1 = require("../reminder-rule/entities/reminder-rule.entity");
const event_entity_1 = require("../event/entities/event.entity");
const reminder_pattern_controller_1 = require("./reminder-pattern.controller");
const reminder_pattern_service_1 = require("./reminder-pattern.service");
let ReminderPatternModule = class ReminderPatternModule {
};
exports.ReminderPatternModule = ReminderPatternModule;
exports.ReminderPatternModule = ReminderPatternModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                reminder_pattern_entity_1.ReminderPattern,
                reminder_rule_entity_1.ReminderRule,
                event_entity_1.Event,
            ]),
        ],
        controllers: [
            reminder_pattern_controller_1.ReminderPatternController,
        ],
        providers: [
            reminder_pattern_service_1.ReminderPatternService,
        ],
        exports: [
            reminder_pattern_service_1.ReminderPatternService,
        ],
    })
], ReminderPatternModule);
//# sourceMappingURL=reminder-patterns.module.js.map