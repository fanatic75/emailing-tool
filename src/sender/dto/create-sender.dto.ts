import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
export class CreateSenderDTO {
  @ApiProperty({
    description: 'The name of the sender',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  fromName: string;

  @ApiProperty({
    description: 'The email of the sender',
    example: 'john.doe@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  fromEmail: string;

  @ApiPropertyOptional({
    description: 'The email to reply to',
    example: 'john.doe@gmail.com',
  })
  @IsEmail()
  @IsOptional()
  replyTo: string | null;

  @ApiProperty({
    description: 'The number of messages to send per day',
    example: 100,
  })
  @IsNumber()
  @IsNotEmpty()
  messagePerDay: number;

  @ApiProperty({
    description: 'The username to use for the SMTP server',
    example: 'john.doe',
  })
  @IsString()
  @IsNotEmpty()
  userName: string;

  @ApiProperty({
    description: 'The password to use for the SMTP server',
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The host of the SMTP server',
    example: 'smtp.gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  smtpHost: string;

  @ApiProperty({
    description: 'The port of the SMTP server',
    example: 465,
  })
  @IsNumber()
  @IsNotEmpty()
  smtpPort: number;
}

export class SendEmailDTO {
  @ApiProperty({
    description: 'The ID of the sender',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  senderId: number;

  @ApiProperty({
    description: 'The email to send to',
    example: 'john.doe@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  to: string;

  @ApiProperty({
    description: 'The subject of the email',
    example: 'Hello World',
  })
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty({
    description: 'The text of the email',
    example: 'Hello, how are you?',
  })
  @IsString()
  @IsNotEmpty()
  text: string;
}
