import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { RefreshTokenGuards } from 'src/guards/refreshtoken.guared';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @UseGuards(RefreshTokenGuards)
  @Post()
  async createAdmin(@Res() response, @Body() createadmindto: CreateAdminDto){
    try {
      const createadmindata = await this.adminService.create(createadmindto);
      return response.status(HttpStatus.ACCEPTED).json({
        message: 'accepted',
        createadmindata,
        statusCode: 202,
      });
    } catch (error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'not accepted!',
        error: error.message,
        statusCode:400,
      });
    }
  }
  }
