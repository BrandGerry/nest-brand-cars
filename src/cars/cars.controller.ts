import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
//ANTES LA VALIDACION ESTABA AQUI PERO SE CAMBIO DE MANERA GLOBAL A MAIN
// @UsePipes(ValidationPipe)
export class CarsController {
  //IMPORTA LA "BASE DE DATOS"--- CARS SERVICE
  constructor(private readonly carsService: CarsService) {}
  //EMPEZAMOS CON LOS ENDPOINTS
  //DECORADOR GET
  @Get()
  //CREAMOS FUNCION
  getAllCars() {
    //MANDAMOS A LLAMAR A LA FUNCION PARA QUE ME REGRESE TODOS
    return this.carsService.findAll();
  }
  //DECORADOR GET PERO CON ID
  @Get(':id')
  //CREAMOS FUNCION
  //CON UN PIPE QUE ES LA VALIDACION SEA UN UUID
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findById(id);
  }
  //CREAMOS UN POST
  @Post()
  //CREAMOS FUNCION CON PARAMETRO DEL BODY EN BASE AL DTO
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return this.carsService.create(createCarDTO);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDTO: UpdateCarDTO,
  ) {
    return this.carsService.update(id, updateCarDTO);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
