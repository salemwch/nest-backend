import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CommandeModule } from './commande/commande.module';
import { FatcureModule } from './fatcure/fatcure.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ProviderModule } from './provider/provider.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'backendproject',
    }),
    CategoryModule,
    SubcategoryModule,
    ProductModule,
    OrderModule,
    CommandeModule,
    FatcureModule,
    CustomerModule,
    AdminModule,
    UserModule,
    ProviderModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
