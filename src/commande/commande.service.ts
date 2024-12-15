import { Body, Injectable } from '@nestjs/common';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InterfaceCommande } from './interface/interface';
import { InterFaceOrder } from 'src/order/interface/order-interface';

@Injectable()
export class CommandeService {
  constructor(
    @InjectModel('commande') private commandeModel: Model<InterfaceCommande>,
    @InjectModel('order') private orderModel: Model<InterFaceOrder>
  ){}
  async create(createCommandeDto: CreateCommandeDto): Promise<InterfaceCommande> {
    const createcommande = await new this.commandeModel(createCommandeDto);
    await this.orderModel.updateOne({_id:createCommandeDto.order}, {$push:{commande:createcommande._id}})
    return createcommande.save();
  }
  async getAll(): Promise<InterfaceCommande[]> {
  const getallData = await this.commandeModel.find();
  return getallData;
}
  async deletbyID(id: string): Promise<InterfaceCommande>{
    const deletbyID = await this.commandeModel.findByIdAndDelete(id)
    return deletbyID;
  }
  async updateData(id: string , Updatedto: UpdateCommandeDto): Promise<InterfaceCommande>{
    const updatedData = await this.commandeModel.findByIdAndUpdate(id, Updatedto, {new: true})
    return updatedData;
  }
}
