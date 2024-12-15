import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './entities/product.entity';
import { subcategorySchema } from 'src/subcategory/entities/subcategory.entity';
import { orderSchema } from 'src/order/entities/order.entity';
import { Userschema } from 'src/user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }, {name:'Subcategory', schema: subcategorySchema}, {name: 'order', schema: orderSchema},{name:'user', schema: Userschema}]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
