import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const str = 'Hello Vinit. This is latest version!';
    return str;
  }
}
