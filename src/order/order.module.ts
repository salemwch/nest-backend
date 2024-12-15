import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from './entities/order.entity';
import { ProductSchema } from 'src/product/entities/product.entity';
import { commandeSchema } from 'src/commande/entities/commande.entity';
import { Userschema } from 'src/user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'order', schema: orderSchema}, {name: 'Product', schema: ProductSchema},{name: 'user', schema: Userschema}]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
