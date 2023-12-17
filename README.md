<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
## Recursos
** https://paraarduino.com/ides/como-instalar-el-ide-de-arduino-en-ubuntu/
** https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/johnny-five/johnny-five-tests.ts
** https://johnny-five.io/examples/
** https://programarfacil.com/blog/arduino-blog/arduino-via-web-con-firmata/

## ¿Que es Firmata?
Hemos hablado en varias ocasiones de este protocolo y le hemos dedicamos parte de este podcast. En resumen, es un protocolo estándar para comunicar con microcontroladores desde cualquier software o cualquier ordenador conectado. El objetivo primordial es hacer que el microcontrolador sea una extensión de nuestro entorno de desarrollo. Esto nos evitará tener que programar en diferentes lenguajes de programación, enfocándonos en la aplicación para controlar el dispositivo.

Este protocolo es 100% compatible con Arduino y todos sus microcontroladores. Se han desarrollado frameworks y/o librerías para utilizarlo con múltiples lenguajes, en este enlace puedes echar un vistazo de todos los lenguajes que puedes utilizar. En este articulo vamos a utilizar el framework johnny-five para realizar el control de nuestro Arduino vía web con Firmata y JavaScript.

## Configurar Arduino
Lo primero que tenemos que hacer es cargar el estándar Firmata en nuestra placa de Arduino. Para ello conectamos nuestra placa de Arduino con el cable USB, abrimos el entorno de desarrollo oficial y vamos a:
```
Archivo > Ejemplos > Firmata > StandarFirmata 

```
Esto abre un sketch con el código del protocolo Firmata. Solo nos queda subir dicho sketch a nuestra placa. Con esto ya tendríamos preparado el entorno de desarrollo y la placa para recibir los comandos del protocolo. En los siguientes pasos vamos a ver el esquema eléctrico y la aplicación que nos permita controlar Arduino vía web con Firmata.

En ubuntu y linux en general tenemos que ejecutar el siguiente commando para darle permmisos al puerto usb:
```
To confirm the port exists enter the following from the root directory.

ls /dev/ttyACM0
To set read/write permissions, enter the following

sudo chmod a+rw /dev/ttyACM0
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
# nestjs-nodejs-arduino-johnny-five
