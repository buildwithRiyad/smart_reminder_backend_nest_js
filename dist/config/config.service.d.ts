import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class ConfigService {
    getTypeOrmConfig(): TypeOrmModuleOptions;
    get jwtSecret(): string;
    get jwtExpiration(): string;
    get googleClientId(): string;
    get googleClientSecret(): string;
    get googleCallbackUrl(): string;
}
