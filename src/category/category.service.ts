import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Icategory } from './interface/category-interface';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private CategoryModel: Model<Icategory>
  ) {}
  async CreateCategory(
    CreateCategoryDto: CreateCategoryDto
  ): Promise<Icategory> {
    const newCategory = await new this.CategoryModel(CreateCategoryDto);
    return newCategory.save();
  }
  async getAll(): Promise<Icategory[]> {
    const dataCategory = await this.CategoryModel.find();
    return dataCategory;
  }
  async DeletCategory(Id: string): Promise<Icategory> {
    const deleteCat = await this.CategoryModel.findByIdAndDelete(Id);
    return deleteCat;
  }
  async UpdateData(
    Id: string,
    updatecategorydto: UpdateCategoryDto
  ): Promise<Icategory> {
    const Updated = await this.CategoryModel.findByIdAndUpdate(
      Id,
      updatecategorydto,
      { new: true }
    );
    return Updated;
  }
  async GetDataById(Id: string): Promise<Icategory> {
    const GetData = await this.CategoryModel.findById(Id);
    return GetData;
  }
}
