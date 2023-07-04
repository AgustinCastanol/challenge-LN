import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  Query,
} from '@nestjs/common';
import { obtenerPorId } from './dto/obtenerPorId.dto';
import { ValidationPipe } from './pipe/validations.pipe';
import { ActualizarDto } from './dto/actualizar.dto';
import { EliminarDto } from './dto/eliminar.dto';
import { ConfigService } from 'src/client/config.service';
import { CrearDto } from './dto/crear.dto';
@Controller('productos')
export class ProductosController {
  constructor(private readonly microserviceServices: ConfigService) {}

  @Get('categorias')
  async obtenerCategorias() {
    return await this.microserviceServices.obtenerCategorias();
  }

  @Get('estados')
  async obtenerEstados() {
    return await this.microserviceServices.obtenerEstados();
  }

  @Get('')
  async obtenerTodos(@Query() query: any) {
    let { page, limit } = query;
    if (page == undefined) {
      page = 0;
    }
    if (limit == undefined) {
      limit = 10;
    }
    return await this.microserviceServices.obtenerTodos(page, limit);
  }

  @Delete('')
  async eliminar(@Body() body: EliminarDto) {
    return await this.microserviceServices.eliminar(body);
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

  @Post('crear')
  @UsePipes(new ValidationPipe())
  async crear(@Body() body: CrearDto) {
    return await this.microserviceServices.crear(body);
  }
}
