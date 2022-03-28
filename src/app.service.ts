import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const str = 'Hello World. Happy codding :-)';
    return str;
  }
}
