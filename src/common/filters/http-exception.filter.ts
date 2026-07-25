import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    const errors = [];
    if (
      typeof message === 'object' &&
      message !== null &&
      'message' in message
    ) {
      if (Array.isArray(message.message)) {
        errors.push(...message.message);
      } else {
        errors.push(message.message);
      }
    } else if (typeof message === 'string') {
      errors.push(message);
    } else {
      errors.push('Unexpected error');
    }

    this.logger.error(exception);

    response.status(status).json({
      success: false,
      message: status === HttpStatus.INTERNAL_SERVER_ERROR ? 'Internal server error' : 'Error',
      errors: errors,
    });
  }
}
