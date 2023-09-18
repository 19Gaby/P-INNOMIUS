// hello.dto.ts

import { IsString, IsOptional } from 'class-validator';

export class HelloDto {
  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  name: string;
}
