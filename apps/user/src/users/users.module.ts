import { Module } from '@nestjs/common';
import { Service } from './users.service';
import { Controller } from './users.controller';

@Module({
  controllers: [Controller],
  providers: [Service],
})
export class Module {}
