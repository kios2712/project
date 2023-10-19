import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderheaderService } from './orderheader.service';
import { CreateOrderheaderDto } from './dto/create-orderheader.dto';
import { UpdateOrderheaderDto } from './dto/update-orderheader.dto';

@Controller('orderheader')
export class OrderheaderController {
  constructor(private readonly orderheaderService: OrderheaderService) {}

  @Post()
  create(@Body() createOrderheaderDto: CreateOrderheaderDto) {
    return this.orderheaderService.create(createOrderheaderDto);
  }

  @Get()
  findAll() {
    return this.orderheaderService.findAll({relations: ['customer','orderDetail']});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderheaderService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderheaderDto: UpdateOrderheaderDto) {
    return this.orderheaderService.update(+id, updateOrderheaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderheaderService.remove(+id);
  }
}
