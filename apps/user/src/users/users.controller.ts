import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Service } from '../..service';
import { CreateDto } from './dto/create-dto';
import { UpdateDto } from './dto/update-dto';

@Controller()
export class Controller {
  constructor(private readonly Service: Service) {}

  @MessagePattern('create')
  create(@Payload() createDto: CreateDto) {
    return this.Service.create(createDto);
  }

  @MessagePattern('findAll')
  findAll() {
    return this.Service.findAll();
  }

  @MessagePattern('findOne')
  findOne(@Payload() id: number) {
    return this.Service.findOne(id);
  }

  @MessagePattern('update')
  update(@Payload() updateDto: UpdateDto) {
    return this.Service.update(updateDto.id, updateDto);
  }

  @MessagePattern('remove')
  remove(@Payload() id: number) {
    return this.Service.remove(id);
  }
}
