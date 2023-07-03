import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class JwtFilter<T> implements ExceptionFilter {
  async use(req: Request, res: Response, next: any) {
    console.log('JwtFilter');
    next();
  }

  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception['status'] || 500;
    const message = exception['message'] || 'Error interno del servidor';
    console.log(status, message);
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  }
}
