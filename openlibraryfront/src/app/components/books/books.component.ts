import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { Work } from '../../models/Work';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  find_book: Book[];

  find_work: Work[];

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

  searchBook(isbn:string){
    this.bs.searchBook(isbn).subscribe(book => {
      this.find_book = book;
    })
  }

  searchWork(work_id:string){
    this.bs.searchWork(work_id).subscribe(work => {
      this.find_work = work;
    })
  }
}
