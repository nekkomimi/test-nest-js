import { Body, Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService:BooksService){}

    @Get()
    getAllBooks(
        @Body('title') title: string,
        @Body('author') author: string,
        @Body('category') category: string){
        return this.booksService.createBook(title, author, category);
    }
}
