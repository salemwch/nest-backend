import { Inject, Injectable } from '@nestjs/common';
import { CreateFatcureDto } from './dto/create-fatcure.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InterfaceFacture } from './interface/interface';
import { UpdateFatcureDto } from './dto/update-fatcure.dto';
import { InterfaceCommande } from 'src/commande/interface/interface';

@Injectable()
export class FatcureService {
  constructor(
    @InjectModel("facture") private  factureModel:Model<InterfaceFacture>,
    @InjectModel("commande") private commandeModel: Model<InterfaceCommande>
  ){}
  async create(createFatcureDto: CreateFatcureDto): Promise<InterfaceFacture> {
    const createfacture = await new this.factureModel(createFatcureDto);
    await this.commandeModel.updateOne({_id:createFatcureDto.commande},{$push:{facture:createfacture._id}})
    return createfacture.save();
  }
  async getData(): Promise<InterfaceFacture[]>{
    const getallaData = await this.factureModel.find();
    return getallaData;
  }
  async deleteByID(id: string, deletedata: UpdateFatcureDto): Promise<InterfaceFacture>{
    const deleteByid = await this.factureModel.findByIdAndDelete(id,deletedata);
    return deleteByid;
  }
  async updateData(id: string, updatedData: UpdateFatcureDto): Promise<InterfaceFacture>{
    const updateDatabyid = await this.factureModel.findByIdAndUpdate(id, updatedData, {new: true});
    return updateDatabyid;
  }
}
