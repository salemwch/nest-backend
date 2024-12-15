import {Controller,Post,Body,HttpStatus,Res,Get,Param,Put,Delete,UseInterceptors,UploadedFiles, UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import {diskStorage } from 'multer';
import { RefreshTokenGuards } from 'src/guards/refreshtoken.guared';
import { error } from 'console';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}                                 
  @UseGuards(RefreshTokenGuards)
  @Post()
  @UseInterceptors(FilesInterceptor("files", 6,{
    storage:diskStorage({
      destination: "./upload",
      filename: (req,file,callback) => callback(null,`${new Date().getTime()}-${file.originalname}`)
    })
  })) 
  create(@Body() createproductdto: createProductDto, @UploadedFiles() files ){
    createproductdto.image= files.map(item => item.filename)
    return this.productService.CreateProduct(createproductdto);
  }

  async Products(@Res() response, @Body() createProductDto: createProductDto) {
    try {
      const CreateProducts =
        await this.productService.CreateProduct(createProductDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'your prdoucts has been created',
        CreateProducts,
        statusCode: 201,
      });
    } catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'failed to create your product',
        error: error.message,
        statusCode: 400,
      });
    }
  }
  @UseGuards(RefreshTokenGuards)
  @Get()
  async GetThem(@Res() response) {
    try {
      const AllData = await this.productService.GetAll();
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'all products fetched successfully',
        AllData,
        statusCode: 202,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        error: error.message,
        statusCode: 400,
      });
    }
  }
  @UseGuards(RefreshTokenGuards)
  @Put('/:id')
  @UseInterceptors(FilesInterceptor("files", 6,{
    storage:diskStorage({
      destination: "./upload",
      filename: (req,file,callback) => callback(null,`${new Date().getTime()}-${file.originalname}`)
    })
  }))
  async Updated(@Res() response,  @Param('id') id: string,  @Body() updateproductdto: UpdateProductDto,@UploadedFiles() files 

  ) {

    try {
      updateproductdto.image= files.map(item => item.filename)
      const updateAllData = await this.productService.updateAllData(id, updateproductdto);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'product updated successfully!',
        updateAllData,
        statusCode: 202,
      });
    } catch(error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'not updated !',
        error: error.message,
        statusCode: 400,
      });
    }
  }
  @UseGuards(RefreshTokenGuards)
  @Delete('/:id')
  async DeltedById(@Res() response, @Param('id') id: string, deletedData: createProductDto)
  {
    try {
      const deleteAll = await this.productService.deleteAll(id, deletedData);
      return response.status(HttpStatus.CREATED).json({
        message: 'Delted succesfull',
        deleteAll,
        statusCode: 201,
      });
    } catch(error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'failed to delete product',
        error: error.message,
        statusCode: 400,
      });
    }
  }
  @UseGuards(RefreshTokenGuards)
  @Get("/:id")
   async getData(@Res() response, @Param("id") productId: string){
    try{
      const getone = await this.productService.Getone(productId);
      return response.status(HttpStatus.ACCEPTED).json({
        message: "get data by id succefull",
        getone,
        statusCode: 202,
      });
    }catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'bad request',
        error: error.message,
        statusCode: 400,
      });
    }
   }
}
