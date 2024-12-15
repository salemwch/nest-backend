import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createProductDto } from './dto/create-product.dto';
import { InterfaceProduct } from './interface/product-interface';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
import { InterfaceSub } from 'src/subcategory/Interface/interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<InterfaceProduct>,
    @InjectModel('Subcategory') private subcategoryModel: Model<InterfaceSub>
  ) {}
  async CreateProduct( 
    CreateProducts: createProductDto
  ): Promise<InterfaceProduct> {
    const Prod = await new this.productModel(CreateProducts);
    await this.subcategoryModel.updateOne({_id:CreateProducts.subcategory},{$push:{Product:Prod._id}})
    return Prod.save();
  }
  async GetAll(): Promise<InterfaceProduct[]> {
    const AllOfThem = await this.productModel.find();
    return AllOfThem;
  }
  async updateAllData(id: string, updateData: UpdateProductDto): Promise<InterfaceProduct> {
    const updatedData = await this.productModel.findByIdAndUpdate(id,updateData,{ new: true }
    );
    return updatedData;
  }
  async deleteAll( id: string, deletData: UpdateProductDto): Promise<InterfaceProduct> {
    const deleteAllData = await this.productModel.findByIdAndDelete(id,deletData);
    return deleteAllData;
  }
  async Getone(Id:string): Promise<InterfaceProduct>{
    const getone = await this.productModel.findById(Id)
    return getone;
  }
}
