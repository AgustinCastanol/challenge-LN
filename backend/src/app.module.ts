import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { AuthKeyFilter } from './errors/errors.filter';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ProductosModule, ClientModule],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AuthKeyFilter,
    },
    ClientModule,
  ],
})
export class AppModule {}
