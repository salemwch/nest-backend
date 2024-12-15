import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { createReadStream } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("file/:img")
  getfile(@Param("img")img:string):StreamableFile{
    const filepath = join(process.cwd(),"./upload/" + img)
    const file = createReadStream(filepath)
    return  new StreamableFile(file)
  }

}
