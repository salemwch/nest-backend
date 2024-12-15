import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';


@Controller('order')
export class OrderController {
  constructor(private oderService: OrderService) {}

  @Post()
  async CreateOrder(@Res() response, @Body() createorder: CreateOrderDto){
  try {
    const OrderCreate = await  this.oderService.CreateOrder(createorder);
    return response.status(HttpStatus.ACCEPTED).json({
      message: 'created with successful',
      OrderCreate,
      statusCode: 200,
    });
  } catch (error) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: 'bad request ',
      statusCode: 400,
    })
  }
}
  @Get()
  async GetOrder(@Res() response){
    try {
      const getorder = await this.oderService.GetOrder();
      return response.status(HttpStatus.ACCEPTED).json({
        message: "Done",
        getorder,
        statusCode: 200,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'bad request',
        statusCode: 400,
      })
    }
  }
  @Delete('/:id')
  async Deletorder(@Res() response, @Param("id") orderId: string ){
    try {
      const deletorder =  await this.oderService.deletByID(orderId);
      return response.status(HttpStatus.ACCEPTED).json({
        message: "accepted",
        deletorder,
        statusCode: 200,
      });
  } catch (error) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: 'bad request',
      statusCode: 400,
    });
  }
}
  @Put('/:id')
  async updateOrder(@Res() response, @Param('id') orderId:string, @Body() updatedto: UpdateOrderDto){
    try {
      const updateorder = await this.oderService.Updateorder(orderId, updatedto);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'accepted',
        updateorder,
        statusCode: 200
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        statusCode: 400
      });
    }
  }
  @Delete()
  async deletAllOrder(@Res() response){
    try {
      const deletedall = await this.oderService.deletAll();
      return response.status(HttpStatus.ACCEPTED).json({
        messaghe: 'accepted',
        deletedCount: deletedall.Deletedcount,
        statusCode: 200
      });
    } catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:'bad request',
        statusCode:'400'
      }); 
    }
  }
}
