import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private bs:BookService) { }

  ngOnInit(): void { 
    this.bs.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  addBook(isbn:string){
    this.bs.addBook(isbn).subscribe(book => {
      this.books.push(book);
    })
  }

}
