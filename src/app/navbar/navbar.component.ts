import { Component, OnInit } from '@angular/core';
import { Book } from '../_model/book';
import { Category } from '../_model/category';
import { BookService } from '../_service/book.service';
import { CategoryService } from '../_service/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  books: Book[];
  categories: Category[];

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listCategory();
    this.listBook();
  }

  listBook(): void {
    this.bookService.getBookList().subscribe(
      data => {
        this.books = data;
        console.log(data);
      }
    )
  }


  listCategory(): void {
    this.categoryService.getCate().subscribe(
      data => {
        this.categories = data;
        console.log(data);
      }
    )
  }


}
