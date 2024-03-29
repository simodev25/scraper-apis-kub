import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindIdRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'idRequest in the link ',
    type: String,
  })
  idRequest: string;
}
