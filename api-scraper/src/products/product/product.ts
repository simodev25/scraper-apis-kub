import { ProductDetail } from './productDetail';
import { ImageProduct } from './product.interface';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  baseUrl: string;
  @ApiProperty()
  country: string;
  @ApiProperty()
  currency: string;
  @ApiProperty()
  site: string;
  @ApiProperty()
  asin: string;
  @ApiProperty()
  searchWord: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  price: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  link: string;
  @ApiProperty()
  reviews: string;
  @ApiProperty()
  shipping: string;
  @ApiProperty()
  images: ImageProduct[];
  @ApiProperty()
  categorys: string[] ;
  @ApiProperty()
  productDetail: ProductDetail;
  @ApiProperty()
  rating: string;


}
