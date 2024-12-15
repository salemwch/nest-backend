import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { RefreshTokenGuards } from 'src/guards/refreshtoken.guared';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}
  @UseGuards(RefreshTokenGuards)
  @Post()
  async subaCategory(
    @Res() response,
    @Body() subcategorydto: CreateSubcategoryDto
  ) {
    try {
      const newSubcategory =
        await this.subcategoryService.subCategory(subcategorydto);
      return response.status(HttpStatus.CREATED).json({
        message: 'created',
        newSubcategory,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.CREATED).json({
        message: 'created',
        statusCode: 400,
      });
    }
  }
  @UseGuards(RefreshTokenGuards)
  @Get()
  async getdata(@Res() response) {
    try {
      const getAll = await this.subcategoryService.GetAll();
      return response.status(HttpStatus.OK).json({
        message: 'i get it',
        getAll,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: "i can't get it",
        statusCode: 400,
      });
    }
  }
  @UseGuards(RefreshTokenGuards)
  @Put('/:id')
  async UpdatedData(
    @Res() response,
    @Param('id') id: string,
    @Body() updatesubcategorydto: UpdateSubcategoryDto
  ) {
    try {
      const updatedata = await this.subcategoryService.updated(
        id,
        updatesubcategorydto
      );
      return response.status(HttpStatus.OK).json({
        message: 'updated',
        updatedata,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'sorry bad request',
        statusCode: 400,
      });
    }
  }
  @UseGuards(RefreshTokenGuards)
  @Delete('/:id')
  async deltedById(
    @Res() response,
    @Param('id') id: string,
  ) {
    try {
      const deletedByid = await this.subcategoryService.Delted(id);
      return response.status(HttpStatus.OK).json({
        message: 'delted',
        deletedByid,
        statusCode: 200,
      });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'CANT BE DELTED',
        statusCode: 400,
      });
    }
  }
}
