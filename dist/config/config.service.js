"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
let ConfigService = class ConfigService {
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '5432', 10),
            username: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres',
            database: process.env.DB_NAME || 'event_reminder',
            entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],
            synchronize: process.env.NODE_ENV !== 'production',
            logging: process.env.NODE_ENV !== 'production',
        };
    }
    get jwtSecret() {
        return process.env.JWT_SECRET || 'default_secret';
    }
    get jwtExpiration() {
        return process.env.JWT_EXPIRATION || '7d';
    }
    get googleClientId() {
        return process.env.GOOGLE_CLIENT_ID || '';
    }
    get googleClientSecret() {
        return process.env.GOOGLE_CLIENT_SECRET || '';
    }
    get googleCallbackUrl() {
        return process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/redirect';
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = __decorate([
    (0, common_1.Injectable)()
], ConfigService);
//# sourceMappingURL=config.service.js.map