import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';


@Catch(Error)
export class ErrorFilter implements ExceptionFilter {
 // logger: CustomLogger;

  constructor() {
   // this.logger = new CustomLogger("ErrorFilter");
  }

  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply<ServerResponse>>();
    const request = ctx.getRequest<FastifyRequest<IncomingMessage>>();

    let stackTop = "";
    if (error.stack) {
      try {
        stackTop = error.stack
          .split("\n")[1]
          .split("at ")[1]
          .split(" ")[0];
        // tslint:disable-next-line:no-empty
      } catch (e) {}
    }
    const message = error.message;
    const logMessage = {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message,
    };
    console.error(JSON.stringify(logMessage), null, stackTop);

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      ...logMessage,
    });
  }
}
