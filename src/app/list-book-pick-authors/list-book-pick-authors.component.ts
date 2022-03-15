import { Component, OnInit } from '@angular/core';
import { Book } from '../_model/book';
import { BookService } from '../_service/book.service';


@Component({
  selector: 'app-list-book-pick-authors',
  templateUrl: './list-book-pick-authors.component.html',
  styleUrls: ['./list-book-pick-authors.component.css']
})
export class ListBookPickAuthorsComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService) { }

  
  ngOnInit(): void {
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

  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 1,  
    "dots": false,  
    "infinite": true,
    "autoplay": true,

  };  

}
