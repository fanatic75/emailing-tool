import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { Sender } from './sender';
import { CreateSenderDTO, SendEmailDTO } from './dto/create-sender.dto';
import { TimeoutInterceptor } from './timeout.interceptor';
import { RateLimit } from 'nestjs-rate-limiter';

@Controller('sender')
export class SenderController {
  constructor(private readonly senderService: Sender) {}

  @RateLimit({
    keyPrefix: 'sign-up',
    points: 5,
    duration: 60,
    errorMessage: 'Sender cannot be created more than five times in a minute',
  })
  @Post('/')
  @UseInterceptors(new TimeoutInterceptor())
  async create(@Body() sender: CreateSenderDTO) {
    return this.senderService.create(sender);
  }

  @RateLimit({
    keyPrefix: 'send-email',
    points: 10,
    duration: 60,
    errorMessage: 'Email cannot be sent more than 10 times in a minute',
  })
  @Post('/send-email')
  async sendEmail(@Body() sendEmailBody: SendEmailDTO) {
    const email = await this.senderService.sendEmail(sendEmailBody);
    return email;
  }
}
