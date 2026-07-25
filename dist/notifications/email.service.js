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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let EmailService = EmailService_1 = class EmailService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(EmailService_1.name);
        this.transporter =
            nodemailer.createTransport({
                host: this.configService.get('EMAIL_HOST'),
                port: Number(this.configService.get('EMAIL_PORT')),
                secure: this.configService.get('EMAIL_SECURE') === 'true',
                auth: {
                    user: this.configService.get('EMAIL_USER'),
                    pass: this.configService.get('EMAIL_PASS'),
                },
            });
        this.transporter.verify((error, success) => {
            if (error) {
                this.logger.error('❌ SMTP Connection Error:', error);
            }
            else {
                this.logger.log('✅ SMTP Server is ready');
            }
        });
    }
    async sendEmail(to, subject, html) {
        try {
            await this.transporter.sendMail({
                from: this.configService.get('EMAIL_FROM'),
                to,
                subject,
                html,
            });
            this.logger.log(`✅ Email sent successfully to ${to}`);
        }
        catch (error) {
            this.logger.error(`❌ Email sending failed to ${to}`, error.stack);
            throw error;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map