import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from "../_model/book";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Book[]>{
    // return this.httpClient.get<GetBookResponse>('http://localhost:8080/api/books').pipe(map(response => response._embedded.books));
    return this.httpClient.get<Book[]>('http://localhost:8080/api/book/getAll');
  }
  getBookByDate(): Observable<Book[]>{
    // return this.httpClient.get<GetBookResponse>('http://localhost:8080/api/books').pipe(map(response => response._embedded.books));
    return this.httpClient.get<Book[]>('http://localhost:8080/api/book/getTop');
  }

  public getProductListByAuthorId(theAuthorId: number): Observable<Book[]> {
    return this.httpClient.get<GetBookResponse>(`${this.baseUrl}books/search/findByAuthorId?id=${theAuthorId}`).pipe(
        map(response => response._embedded.books)
    );
  }

  searchBookAndPagination(thePage: number, thePageSize: number, theKeyword: string): Observable<GetBookResponse> {
    return this.httpClient.get<GetBookResponse>(
        `${this.baseUrl}books/search/findByTitleContaining?title=${theKeyword}&page=${thePage}&size=${thePageSize}`);
  }

  searchBook(theKeyword: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}book/search?title=${theKeyword}`);
  }


  public getBookListByAuthorId(theAuthorId: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}book/getBookByAuthor/${theAuthorId}`);
  }






  getBook(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}books/${bookId}`);
  }

  
  public getBookListPagination(thePage: number, thePageSize: number): Observable<GetBookResponse> {
    return this.httpClient.get<GetBookResponse>(`${this.baseUrl}books?page=${thePage}&size=${thePageSize}`);
  }


  public getBookListByAuthorIdAndPagination(thePage: number, thePageSize: number,
    theAuthorId: number): Observable<GetBookResponse> {
    return this.httpClient.get<GetBookResponse>(
        `${this.baseUrl}books/search/findByCategoryId?id=${theAuthorId}&page=${thePage}&size=${thePageSize}`
    );
  }
}

interface GetBookResponse{
  _embedded: {
    books: Book[];
  };
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}