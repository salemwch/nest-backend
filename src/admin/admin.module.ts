import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { adminSchema } from './entities/admin.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Userschema } from 'src/user/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'user', schema: Userschema}
    ])
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
