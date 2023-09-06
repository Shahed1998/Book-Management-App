import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers!: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
  }

  // services
  books = (): Observable<Book[]> => {
    return this.http.get('assets/data/test.json').pipe(
      map((data: any) => {
        let books: Array<Book> = [];
        data.forEach((val: any) => {
          books.push(val);
        });
        return books;
      })
    );
  };
}
