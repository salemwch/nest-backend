import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { interfaceadmin } from './interface/interface';
import * as argon2 from 'argon2';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('user') private adminModel:Model<interfaceadmin>
  ){}
  async create(createAdmin: CreateAdminDto): Promise<interfaceadmin>{
    const hash = await this.hashdata(createAdmin.password)
    const createadmin = await new this.adminModel({...createAdmin,password:hash})
    return createadmin.save()
  }
  hashdata(data: string){
    return argon2.hash(data)
  }
}
