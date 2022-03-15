import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Category } from '../_model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategoryList(): Observable<Category[]>{
    return this.httpClient.get<GetCategorryResponse>('http://localhost:8080/api/categories').pipe(map(response => response._embedded.categories));
  }

  getCate(): Observable<Category[]>{
    return this.httpClient.get<Category[]>('http://localhost:8080/api/category/getAll');
  }

}

interface GetCategorryResponse{
  _embedded: {
    categories: Category[];
  };
}