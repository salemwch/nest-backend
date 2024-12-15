import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { commandeSchema } from './entities/commande.entity';
import { orderSchema } from 'src/order/entities/order.entity';
import { factuerschema } from 'src/fatcure/entities/fatcure.entity';

@Module({
  imports: [ 
    MongooseModule.forFeature([{name: 'commande', schema: commandeSchema},{name: 'order', schema:orderSchema},{name: 'facture', schema: factuerschema}])
  ],
  controllers: [CommandeController],
  providers: [CommandeService],
})
export class CommandeModule {}
