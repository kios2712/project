import { Module } from '@nestjs/common';
import { OrderheaderService } from './orderheader.service';
import { OrderheaderController } from './orderheader.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderheader } from './entities/orderheader.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Orderheader])],
  controllers: [OrderheaderController],
  providers: [OrderheaderService],
})
export class OrderheaderModule {}
