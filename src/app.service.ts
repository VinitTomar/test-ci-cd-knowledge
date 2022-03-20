import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let str: any = 'Hello Vinit!';
    return str;
  }
}
