import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as five from 'johnny-five';
import { setTimeout } from 'timers/promises';

async function bootstrap() {
  const board = new five.Board({ repl: false });
  const app = await NestFactory.create(AppModule);
  board.on('ready', function () {
    console.log('encendido.');
  });
  
  await app.listen(3000);
}
bootstrap();
