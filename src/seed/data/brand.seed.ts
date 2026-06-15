import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'ALFA ROMEO',
    created_at: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'MERCEDES',
    created_at: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'BMW',
    created_at: new Date().getTime(),
  },
];
