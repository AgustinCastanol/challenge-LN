import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { ClientModule } from 'src/client/client.module';
import { ConfigService } from 'src/client/config.service';

@Module({
  imports: [ClientModule],
  providers: [ProductosService],
  controllers: [ProductosController],
})
export class ProductosModule {}
