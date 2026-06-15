import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

//BD
//FUNCIONES QUE HACEN TODA LA LOGICA EN EL CONTROLLER
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'VW',
      model: 'Jetta',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id "${id}" not found`);
    }
    return car;
  }

  create(CreateCarDTO: CreateCarDTO) {
    const car: Car = {
      id: uuid(),
      brand: CreateCarDTO.brand,
      model: CreateCarDTO.model,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDTO: UpdateCarDTO) {
    let carDB = this.findById(id);
    if (updateCarDTO.id && updateCarDTO.id !== id)
      throw new BadRequestException('Car id is not valid inside de body');
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDTO, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    const carDB = this.findById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return {
      message: 'Car deleted',
    };
  }

  fillCarWithSeed(cars: Car[]) {
    this.cars = cars;
  }
}
