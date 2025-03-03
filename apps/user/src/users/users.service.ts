import { Injectable } from '@nestjs/common';
import { CreateDto } from './src/dto/create-..dto';
import { UpdateDto } from './src/dto/update-..dto';

@Injectable()
export class UsersService {
  create(createDto: CreateDto) {
    return 'This action adds a new ';
  }

  findAll() {
    return `This action returns all `;
  }

  findOne(id: number) {
    return `This action returns a #${id} `;
  }

  update(id: number, updateDto: UpdateDto) {
    return `This action updates a #${id} `;
  }

  remove(id: number) {
    return `This action removes a #${id} `;
  }
}
