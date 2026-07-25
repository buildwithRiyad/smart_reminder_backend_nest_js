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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderPatternController = void 0;
const common_1 = require("@nestjs/common");
const reminder_pattern_service_1 = require("./reminder-pattern.service");
const create_pattern_dto_1 = require("./dto/create-pattern.dto");
let ReminderPatternController = class ReminderPatternController {
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.createPattern(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    delete(id) {
        return this.service.deletePattern(id);
    }
    applyPattern(patternId, eventId) {
        return this.service.applyPattern(eventId, patternId);
    }
};
exports.ReminderPatternController = ReminderPatternController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_pattern_dto_1.CreatePatternDto !== "undefined" && create_pattern_dto_1.CreatePatternDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ReminderPatternController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReminderPatternController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReminderPatternController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReminderPatternController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':patternId/apply/:eventId'),
    __param(0, (0, common_1.Param)('patternId')),
    __param(1, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReminderPatternController.prototype, "applyPattern", null);
exports.ReminderPatternController = ReminderPatternController = __decorate([
    (0, common_1.Controller)('reminder-patterns'),
    __metadata("design:paramtypes", [typeof (_a = typeof reminder_pattern_service_1.ReminderPatternService !== "undefined" && reminder_pattern_service_1.ReminderPatternService) === "function" ? _a : Object])
], ReminderPatternController);
//# sourceMappingURL=reminder-patterns.controller.js.map