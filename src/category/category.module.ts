import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchema } from './entities/category.entity';
import { subcategorySchema } from 'src/subcategory/entities/subcategory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: categorySchema }, {name: 'Subcategory' , schema: subcategorySchema
    }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
