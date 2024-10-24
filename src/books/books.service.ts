import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dtos/create-book.dto';
import UpdateBookDto from './dtos/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) { }

  findAll() {
    return this.booksRepository.find();
  }

  async findOne(id: number) {
    const record = await this.booksRepository.findOne({
      where: { id },
    });

    if (record === null) {
      throw new NotFoundException(`Book #${id} not found.`);
    }

    return record;
  }

  create(newBook: CreateBookDto) {
    const book = this.booksRepository.create(newBook);
    return this.booksRepository.save(book);
  }

  async update(id: number, updateBook: UpdateBookDto) {
    const book = await this.findOne(id)

    this.booksRepository.merge(book, updateBook);

    return this.booksRepository.save(book);
  }

  async remove(id: number) {
    const book = await this.findOne(id);
    return this.booksRepository.remove(book);
  }
}
