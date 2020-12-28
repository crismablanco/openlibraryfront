import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  @Output() searchBook: EventEmitter<any> = new EventEmitter();

  isbn:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.searchBook.emit(this.isbn);
  }

}
