import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }

  onBookDetail(book) {
    console.log(book);
  }
  
  onBookDelete(book) {
    console.log(book);
  }
}
