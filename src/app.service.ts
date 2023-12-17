import { Injectable } from '@nestjs/common';
import * as five from 'johnny-five';
import { setTimeout } from 'timers/promises';
@Injectable()
export class AppService {
  a = true;

  getHello() {
    const led = new five.Led(13);

    led.blink();

    setTimeout(10000).then(() => {
      led.stop();
    });

    return 'Mi pagina con arduino';
  }

  async getOn() {
    const led = new five.Led(13);

    await led.stop();

    await led.on();

    return 'Led Encendido';
  }

  async getOff() {
    const led = new five.Led(13);

    await led.stop();
    await led.off();
    return 'Led Apagado';
  }
}
