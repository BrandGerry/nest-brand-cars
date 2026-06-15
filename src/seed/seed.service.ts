import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  //INYECTAR EL SERVICIO
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}
  populateDB() {
    this.carsService.fillCarWithSeed(CARS_SEED);
    this.brandService.fillBrandWithSeed(BRAND_SEED);

    return {
      message: 'SEED GOO',
    };
  }
}
