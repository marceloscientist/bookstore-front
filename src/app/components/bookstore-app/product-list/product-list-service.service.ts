import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'https://localhost:44382/api/bookstore';

  httpOptions = {
    Headers: new HttpHeaders(
      {'content-type': 'application/json'}
    )}

  constructor(private httpClient:HttpClient) { }

  getBook() {
    return this.httpClient.get(this.url);
  }
}
