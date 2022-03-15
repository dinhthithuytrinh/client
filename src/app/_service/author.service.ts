import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from "../_model/book";
import { Author } from '../_model/author';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) { }

  getAuthorList(): Observable<Author[]>{
    return this.httpClient.get<GetAuthorResponse>('http://localhost:8080/api/author').pipe(map(response => response._embedded.authors));
  }

  getBookByAuthor(id: number): Observable<Book[]>{
    // return this.httpClient.get<GetBookResponse>('http://localhost:8080/api/books').pipe(map(response => response._embedded.books));
    return this.httpClient.get<Book[]>(`http://localhost:8080/api/authors/${id}/books`);
  }

  getBookByAuthorId(id: number): Observable<Book[]>{
    // return this.httpClient.get<GetBookResponse>('http://localhost:8080/api/books').pipe(map(response => response._embedded.books));
    return this.httpClient.get<Book[]>(`http://localhost:8080/api/author/getBookByAuthorId/${id}`);
  }
}

interface GetAuthorResponse{
  _embedded: {
    authors: Author[];
  };
}
