"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderRuleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reminder_rule_entity_1 = require("./entities/reminder-rule.entity");
const reminder_rule_service_1 = require("./reminder-rule.service");
const reminder_rule_controller_1 = require("./reminder-rule.controller");
const events_module_1 = require("../events/events.module");
let ReminderRuleModule = class ReminderRuleModule {
};
exports.ReminderRuleModule = ReminderRuleModule;
exports.ReminderRuleModule = ReminderRuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                reminder_rule_entity_1.ReminderRule
            ]),
            events_module_1.EventsModule
        ],
        controllers: [
            reminder_rule_controller_1.ReminderRuleController
        ],
        providers: [
            reminder_rule_service_1.ReminderRuleService
        ],
        exports: [
            reminder_rule_service_1.ReminderRuleService
        ]
    })
], ReminderRuleModule);
//# sourceMappingURL=reminder-rule.module.js.map