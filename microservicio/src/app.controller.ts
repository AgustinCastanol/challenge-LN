import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product/product.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
  ) {}

  @EventPattern('actualizar_producto')
  async actualizar(data: any) {
    return this.productService.update(data.id, data);
  }

  @EventPattern('eliminar_producto')
  async eliminar(data: any) {
    console.log('eliminar_producto', data);
  }

  @EventPattern('obtener_todos_productos')
  async obtenerTodos() {
    return await this.productService.findAll();
  }

  @EventPattern('obtener_producto_por_id')
  async obtenerPorId(id: string) {
    console.log('obtener_producto_por_id', id);
    return { id };
  }
}
