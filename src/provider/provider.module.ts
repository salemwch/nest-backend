import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Userschema } from 'src/user/entities/user.entity';
import { ProductSchema } from 'src/product/entities/product.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'user', schema: Userschema}, {name: 'Product', schema:ProductSchema }])],
  controllers: [ProviderController],
  providers: [ProviderService],
})
export class ProviderModule {}
