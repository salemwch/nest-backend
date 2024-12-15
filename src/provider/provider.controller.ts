import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Post()
  async createprovider(@Res() response, @Body() createprovider:CreateProviderDto){
    try{
      const creatproviderdto = await  this.providerService.createprovider(createprovider);
      return response.status(HttpStatus.ACCEPTED).json({
        message: "accepted",
        creatproviderdto,
        statusCode: 200
      });
    } catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:"not accepted",
        statusCode: 400
      });
    }
  }
}
