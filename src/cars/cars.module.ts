import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  //SE EXPORTA EL CARS MODULE
  exports: [CarsService],
})
export class CarsModule {}
