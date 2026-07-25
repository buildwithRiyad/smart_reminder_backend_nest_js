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
var SchedulerService_1;
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const reminders_service_1 = require("../reminders/reminders.service");
const mail_service_1 = require("../mail/mail.service");
let SchedulerService = SchedulerService_1 = class SchedulerService {
    constructor(remindersService, mailService) {
        this.remindersService = remindersService;
        this.mailService = mailService;
        this.logger = new common_1.Logger(SchedulerService_1.name);
    }
    async handleReminderCron() {
        this.logger.log('Checking reminders...');
        const reminders = await this.remindersService
            .findPendingNotifications();
        if (!reminders.length) {
            this.logger.log('No pending reminders');
            return;
        }
        for (const reminder of reminders) {
            try {
                await this.mailService.sendEmail(reminder.user.email, `Reminder: ${reminder.title}`, `
          <h2>${reminder.title}</h2>

          <p>
          ${reminder.description || ''}
          </p>


          <p>
          Event Date:
          ${reminder.eventDate}
          </p>

          `);
                await this.remindersService.markAsSent(reminder.id);
                this.logger.log(`Reminder ${reminder.id} sent`);
            }
            catch (error) {
                this.logger.error(`Failed reminder ${reminder.id}`, error.stack);
            }
        }
    }
};
exports.SchedulerService = SchedulerService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulerService.prototype, "handleReminderCron", null);
exports.SchedulerService = SchedulerService = SchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof reminders_service_1.RemindersService !== "undefined" && reminders_service_1.RemindersService) === "function" ? _a : Object, mail_service_1.MailService])
], SchedulerService);
//# sourceMappingURL=scheduler.service.js.map