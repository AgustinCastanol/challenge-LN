import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class ConfigService {
  constructor(@Inject('NEST_SERVICE') private readonly client: ClientProxy) {}

  async actualizar(data: any) {
    return this.client.send('actualizar_producto', data);
  }

  async eliminar(data: any) {
    return this.client.send('eliminar_producto', data);
  }

  async obtenerTodos() {
    return this.client.send('obtener_todos_productos', '');
  }
  async obtenerPorId(id: string) {
    return this.client.send('obtener_producto_por_id', id);
  }
}
