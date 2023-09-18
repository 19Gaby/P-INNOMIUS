import { Controller, Get, Query } from '@nestjs/common';
import { HelloDto } from './hello.dto'; // Importa el DTO

@Controller('hello')
export class HelloController {
  @Get()
  getHello(@Query() query: HelloDto): string {
    const message = query.message || 'Hello, World!';
    const name = query.name ? `, ${query.name}!` : '!';

    return `${message}${name}`;
  }
}