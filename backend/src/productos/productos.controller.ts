import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common';
import { obtenerPorId } from './dto/obtenerPorId.dto';
import { ValidationPipe } from './pipe/validations.pipe';
import { ActualizarDto } from './dto/actualizar.dto';
import { EliminarDto } from './dto/eliminar.dto';
import { ConfigService } from 'src/client/config.service';
@Controller('productos')
export class ProductosController {
  constructor(private readonly microserviceServices: ConfigService) {}

  @Get('')
  async obtenerTodos() {
    return await this.microserviceServices.obtenerTodos();
  }
  @Get(':id')
  @UsePipes(new ValidationPipe())
  async obtenerPorId(@Param() params: obtenerPorId) {
    const { id } = params;
    return await this.microserviceServices.obtenerPorId(id);
  }

  @Post('')
  @UsePipes(new ValidationPipe())
  async actualizar(@Body() body: ActualizarDto) {
    return await this.microserviceServices.actualizar(body);
  }

  @Delete('')
  async eliminar(@Body() body: EliminarDto) {
    return await this.microserviceServices.eliminar(body);
  }
}
