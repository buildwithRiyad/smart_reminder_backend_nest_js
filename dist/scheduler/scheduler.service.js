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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const reminders_service_1 = require("../reminders/reminders.service");
const notifications_service_1 = require("../notifications/notifications.service");
const notification_type_enum_1 = require("../common/enums/notification-type.enum");
let SchedulerService = SchedulerService_1 = class SchedulerService {
    constructor(remindersService, notificationsService) {
        this.remindersService = remindersService;
        this.notificationsService = notificationsService;
        this.logger = new common_1.Logger(SchedulerService_1.name);
    }
    async handleReminderNotifications() {
        this.logger.log('Checking pending reminders...');
        const pendingReminders = await this.remindersService.findPendingNotifications();
        if (!pendingReminders ||
            pendingReminders.length === 0) {
            this.logger.log('No pending reminders due at this time');
            return;
        }
        for (const reminder of pendingReminders) {
            try {
                const notificationType = reminder.notificationType;
                let recipient;
                switch (notificationType) {
                    case notification_type_enum_1.NotificationType.EMAIL:
                        recipient =
                            reminder.user?.email;
                        break;
                    case notification_type_enum_1.NotificationType.TELEGRAM:
                        recipient =
                            reminder.user?.telegramChatId;
                        break;
                    default:
                        this.logger.warn(`Unsupported notification type for reminder ID: ${reminder.id}`);
                        await this.remindersService.markAsFailed(reminder.id);
                        continue;
                }
                if (!recipient) {
                    this.logger.warn(`No recipient contact found for reminder ID: ${reminder.id}. Marking FAILED.`);
                    await this.remindersService.markAsFailed(reminder.id);
                    continue;
                }
                await this.notificationsService.send({
                    type: notificationType,
                    recipient,
                    subject: `Reminder: ${reminder.title}`,
                    message: `
          <h2>
            ${reminder.title}
          </h2>


          <p>
            ${reminder.description || ''}
          </p>


          <p>
            <strong>
              Event Date:
            </strong>

            ${reminder.eventDate}
          </p>
          `,
                });
                await this.remindersService.markAsSent(reminder.id);
                this.logger.log(`✅ Notification sent successfully for reminder ID: ${reminder.id}`);
            }
            catch (error) {
                this.logger.error(`❌ Failed to send notification for reminder ID: ${reminder.id}`, error.stack);
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
], SchedulerService.prototype, "handleReminderNotifications", null);
exports.SchedulerService = SchedulerService = SchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [reminders_service_1.RemindersService,
        notifications_service_1.NotificationsService])
], SchedulerService);
//# sourceMappingURL=scheduler.service.js.map