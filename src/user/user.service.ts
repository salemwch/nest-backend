import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { interfaceUser } from './interface/interface';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private usermodel: Model<interfaceUser>
  ){}
  async finByemail( email: string): Promise<interfaceUser>{
    return this.usermodel.findOne({email:email});
  }
  async update(ID: string , updatedata: UpdateUserDto): Promise<interfaceUser>{
    return this.usermodel.findByIdAndUpdate(ID,updatedata, {new: true});
  }
  async updatetoken(ID: any , Token: string): Promise<interfaceUser>{
    return this.usermodel.findByIdAndUpdate(ID,{Token},{new:true});
  }
  async getUser(ID:string): Promise<interfaceUser>{
    return this.usermodel.findById(ID);
  }
}
