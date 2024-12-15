import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Userschema } from './entities/user.entity';
import { adminSchema } from 'src/admin/entities/admin.entity';
import { customerSchema } from 'src/customer/entities/customer.entity';
import { providerschema } from 'src/provider/entities/provider.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: 'user', schema: Userschema, discriminators:[{name: "admin", schema: adminSchema},{ name:"customer", schema: customerSchema},{name:"provider", schema:providerschema} ]
    }]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
