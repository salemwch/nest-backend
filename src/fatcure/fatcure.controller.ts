import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { FatcureService } from './fatcure.service';
import { CreateFatcureDto } from './dto/create-fatcure.dto';
import { UpdateFatcureDto } from './dto/update-fatcure.dto';
import { InterfaceFacture } from './interface/interface';

@Controller('fatcure')
export class FatcureController {
  constructor(private readonly fatcureService: FatcureService) {}

  @Post()
  async create(@Res() response, @Body() createFatcureDto: CreateFatcureDto) {
  try { 
    const createfacture = await  this.fatcureService.create(createFatcureDto);
    return response.status(HttpStatus.ACCEPTED).json({
      message:'created',
      createfacture,
      statusCode: 200,
    });
  } catch (error){
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: 'bad request',
      statusCode: 400,
    });
  }
  }
  @Get()
  async Data(@Res() response){
    try {
  const getDataAll = await this.fatcureService.getData();
  return response.status(HttpStatus.ACCEPTED).json({
    message: 'accepted',
    getDataAll,
    statusCode: 200,
  });
} catch (error){
  return response.status(HttpStatus.BAD_REQUEST).json({
    message: 'bad request',
    statusCode: 400,
  });
}
}
@Delete('/:id')
  async deletdData(@Res() response, @Param("id") id: string, deletbyid : CreateFatcureDto)
  {
  try { 
  const deletDataByID = await this.fatcureService.deleteByID(id,deletbyid)
  return response.status(HttpStatus.ACCEPTED).json({
    message:"delted",
    deletDataByID,
    statusCode: 200
  });
} catch (error) {
  return response.status(HttpStatus.BAD_REQUEST).json({
    message:'Bad request',
    statusCode: 400,
  });
}
}
  @Put('/:id')
  async updateddatabyid(@Res() response, @Param('id') id: string, @Body() updateDatafacture: UpdateFatcureDto){
    try {
      const updatedata = await this.fatcureService.updateData(id,updateDatafacture)
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'updated with succesfull',
        updatedata,
        statusCode: 200,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }
}
