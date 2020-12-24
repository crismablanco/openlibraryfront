import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit(): void {
    this.books = [
      {
        id: 1,
        title: 'Angular 11',
        description: 'Este es un libro de Angular 11',
        isbn13: 'AB12345678901',
        isbn10: 'AB12345678'
      },
      {
        id: 2,
        title: 'Natural Language Proccesing',
        description: 'Este es un libro de NLP',
        isbn13: 'AB12345678902',
        isbn10: 'AB12345672'
      },
      {
        id: 3,
        title: 'Ruby on Rails',
        description: 'Este es un libro de RoR',
        isbn13: 'AB12345678903',
        isbn10: 'AB12345673'
      },
      {
        id: 4,
        title: 'Python',
        description: 'Este es un libro de Python',
        isbn13: 'AB12345678904',
        isbn10: 'AB12345674'
      }
    ]
  }

}
