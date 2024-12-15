import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { interfacecustomer } from './interface/interface';
import * as argon2 from 'argon2';
import { InterFaceOrder } from 'src/order/interface/order-interface';

@Injectable()
export class CustomerService {
  constructor (
  @InjectModel('user') private customerModel:Model<interfacecustomer>,
  @InjectModel('order') private orderModel: Model<InterFaceOrder>
  ){}
  async create(createcustomerDto: CreateCustomerDto): Promise<interfacecustomer> {
    const hash = await this.hashdata(createcustomerDto.password)
    const  createcustomer = await new this.customerModel({...createcustomerDto,password:hash})
    await this.orderModel.updateOne({_id:createcustomerDto.order}, {$push:{customer: createcustomer._id}})
    return createcustomer.save();
  }
  hashdata(data: string){
    return argon2.hash(data)
  }
}
