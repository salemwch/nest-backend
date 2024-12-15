import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Userschema } from 'src/user/entities/user.entity';
import { orderSchema } from 'src/order/entities/order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'user', schema: Userschema},{name:'order', schema: orderSchema}])
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
