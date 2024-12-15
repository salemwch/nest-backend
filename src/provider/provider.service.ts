import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { interfaceProvider } from './interface/interface';
import * as argon2 from 'argon2';
import { Model } from 'mongoose';
import { InterfaceProduct } from 'src/product/interface/product-interface';



@Injectable()
export class ProviderService {
  constructor (
  @InjectModel('user') private providerModel:Model<interfaceProvider>,
  @InjectModel('Product') private productModel:Model<InterfaceProduct>
  ){}
  async createprovider(createproviderdto:CreateProviderDto): Promise<interfaceProvider>{
    const hash = await this.hashdata(createproviderdto.password)
    const createprovider = await new this.providerModel({...createproviderdto,password:hash})
    await this.productModel.updateOne({_id:createproviderdto.Product}, {$push:{user:createprovider._id}})
    return createprovider.save()
  }
  hashdata(data: string){
    return argon2.hash(data)
  }
}
