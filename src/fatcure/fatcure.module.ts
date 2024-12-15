import { Module } from '@nestjs/common';
import { FatcureService } from './fatcure.service';
import { FatcureController } from './fatcure.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { factuerschema } from './entities/fatcure.entity';
import { commandeSchema } from 'src/commande/entities/commande.entity';
import { orderSchema } from 'src/order/entities/order.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: "facture", schema: factuerschema},{name: 'commande', schema:commandeSchema}, {name: 'order', schema: orderSchema}]) ],
  controllers: [FatcureController],
  providers: [FatcureService],
})
export class FatcureModule {}
