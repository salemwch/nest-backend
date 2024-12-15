import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file",{
    storage:diskStorage({
      destination: "./upload",
      filename: (req,file,callback) => callback(null,`${new Date().getTime()}-${file.originalname}`)
    })
  }))
  /*create(@Body() createcustomerdto: CreateCustomerDto, @UploadedFile() file ){
    createcustomerdto.image=  file.filename
    return this.customerService.create(createcustomerdto);
  }*/
  async createcustomer(@Res() response, @Body() creatingcustomer: CreateCustomerDto, @UploadedFile() file){
    try {
      creatingcustomer.image = file?.filename
      const createcustomers = await  this.customerService.create(creatingcustomer);
        return response.status(HttpStatus.ACCEPTED).json({
      message: 'created',
      createcustomers,
      statusCode: 200,
    });
  } catch (error){
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: 'bad request!' + error ,
      statusCode: 400
    })
  }
  }
}
