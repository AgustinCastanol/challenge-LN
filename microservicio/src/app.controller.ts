import { BadRequestException, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, RpcException } from '@nestjs/microservices';
import { ProductService } from './product/product.service';
import { Product } from './entities/product.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
  ) {}

  @EventPattern('actualizar_producto')
  async actualizar(data: any) {
    const categoria = await this.productService.findCategory(data.categoria);
    if (!categoria) throw new RpcException('Categoria no existe');
    const estado = await this.productService.findState(data.estado);
    if (!estado) throw new RpcException('Estado no existe');
    const product = new Product();
    product.id = data.id;
    product.sku = data.sku;
    product.nombre_producto = data.nombre;
    product.precio = data.precio;
    product.estado = estado;
    product.id_categoria = categoria.id;
    product.descripcion = data.descripcion;
    product.id_estado = estado.id;
    return this.productService.update(data.id, product);
  }

  @EventPattern('eliminar_producto')
  async eliminar(data: any) {
    const product = await this.productService.findOne(data.id);
    if (!product) throw new RpcException('Producto no existe');
    return this.productService.remove(data.id);
  }

  @EventPattern('obtener_todos_productos')
  async obtenerTodos() {
    return await this.productService.findAll();
  }

  @EventPattern('obtener_producto_por_id')
  async obtenerPorId(id: string) {
    const product = await this.productService.findOne(id);
    if (!product) throw new RpcException('Producto no existe');
    return product;
  }

  @EventPattern('obtener_categorias')
  async obtenerCategorias() {
    return await this.productService.findAllCategories();
  }

  @EventPattern('obtener_estados')
  async obtenerEstados() {
    return await this.productService.findAllStates();
  }

  @EventPattern('crear_producto')
  async crear(data: any) {
    const categoria = await this.productService.findCategory(data.categoria);
    if (!categoria) throw new RpcException('Categoria no existe');
    const estado = await this.productService.findState(data.estado);
    if (!estado) throw new RpcException('Estado no existe');
    const product = new Product();
    product.sku = data.sku;
    product.nombre_producto = data.nombre;
    product.precio = data.precio;
    product.estado = estado;
    product.id_categoria = categoria.id;
    product.descripcion = data.descripcion;
    product.id_estado = estado.id;
    return this.productService.create(product);
  }
}
