import { Controller, Get, Post, Body, Res, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';


@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}
  @Post()
  async createCommande(@Res() response, @Body() createdCommande: CreateCommandeDto){
    try { 
      const createdcommande = await this.commandeService.create(createdCommande);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'created Done!',
        createdcommande,
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
  async getAlldata(@Res() response){
  try {
    const getthemall = await this.commandeService.getAll();
    return response.status(HttpStatus.ACCEPTED).json({
      message: 'accepted',
      getthemall,
      statusCode: 200,
    });
  } catch (error) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: 'bad request',
      statusCode: 400,
    });
  }
  }
  @Delete('/:id')
  async deletedbyId(@Res() response,  @Param("id") commandId: string){
    try {
      const deltedcommande = await this.commandeService.deletbyID(commandId);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'delted done',
        deltedcommande,
        statusCode: 200,
      });
    } catch (error){
      return response.status(HttpStatus.BAD_REQUEST).JSON({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }
  @Put('/:id')
  async updateCommande(@Res() response, @Param("id") UpdateCommand: string , @Body() updatecommanddto: UpdateCommandeDto){
    try {
      const uptaedCommandebyID = await this.commandeService.updateData(UpdateCommand , updatecommanddto);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'updated Done!',
        uptaedCommandebyID,
        statusCode: 200,
      });
    } catch (error){
      return response.status(HttpStatus).json({
        message: 'bad request',
        statusCode: 400,
      });
    }
  }
}
