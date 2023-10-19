import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ProductModule } from './product/product.module';
import { product } from './product/entities/product.entity';
import { CustomerModule } from './customer/customer.module';
import { OrderheaderModule } from './orderheader/orderheader.module';
import { OrderdetailModule } from './orderdetail/orderdetail.module';
import { Orderdetail } from './orderdetail/entities/orderdetail.entity';
import { Orderheader } from './orderheader/entities/orderheader.entity';
import { Customer } from './customer/entities/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'caracas271289',
      database: 'dbtramacard',
      entities: [User, product,Orderdetail,Orderheader,Customer],
      synchronize: true,
    }),
    UsersModule,
    ProductModule,
    CustomerModule,
    OrderheaderModule,
    OrderdetailModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
