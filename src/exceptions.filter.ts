import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor() {}
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    if (status === 500) {
      return response.status(status).json({
        statusCode: status,
        message: (exception as { response?: string })?.response,
      });
    }

    response.status(status).json({
      statusCode: status,
      message: (exception as { response?: string })?.response,
    });
  }
}
