import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const str = 'Hello Vinit. This is version 0.0.14!';
    return str;
  }
}
