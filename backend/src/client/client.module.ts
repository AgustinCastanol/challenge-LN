import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from './config.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NEST_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ClientModule {}
