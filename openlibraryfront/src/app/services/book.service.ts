import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../models/Book'
import { Work } from '../models/Work'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiBaseUrl:string = 'http://127.0.0.1:8000/'
  isbnEndpoint:string = 'isbn'
  woksEndpoint:string = 'works'
  booksEndpoint:string = 'books'
  searchEndpoint:string = 'search.json?q='

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiBaseUrl+this.booksEndpoint)
  }

  getWorks():Observable<Work[]>{
    return this.http.get<Work[]>(this.apiBaseUrl+this.woksEndpoint)
  }

  addBook(isbn:string):Observable<any> {
    const httpPostOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        'isbn': isbn
      }
    }
    return this.http.post<any>(this.apiBaseUrl+this.booksEndpoint, '', httpPostOptions);
  }

}
