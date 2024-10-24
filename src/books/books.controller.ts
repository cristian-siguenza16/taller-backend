import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import UpdateBookDto from './dtos/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }
  @Get()
  findAll() {
    const records = this.booksService.findAll();
    return records;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateBookDto) {
    return this.booksService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateBookDto) {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: number) {
    return this.booksService.remove(id);
  }
}
