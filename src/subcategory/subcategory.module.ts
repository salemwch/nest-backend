import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { subcategorySchema } from './entities/subcategory.entity';
import { categorySchema } from 'src/category/entities/category.entity';
import { ProductSchema } from 'src/product/entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subcategory', schema: subcategorySchema},{ name: 'Category', schema: categorySchema},{name: 'Product', schema: ProductSchema}
    ]),
  ],
  controllers: [SubcategoryController],
  providers: [SubcategoryService],
})
export class SubcategoryModule {}
