import { IsString, IsNotEmpty, IsISBN, IsDateString, IsInt, Min, MaxLength, Max } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  author: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsISBN(13)
  @IsNotEmpty()
  isbn: string;

  @IsDateString()
  @IsNotEmpty()
  publishedAt: Date;

  @IsInt()
  @Min(0)
  availableCopies: number;
}