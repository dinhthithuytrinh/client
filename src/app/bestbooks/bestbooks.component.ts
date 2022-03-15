import { Component, OnInit } from '@angular/core';
import { Book } from '../_model/book';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-bestbooks',
  templateUrl: './bestbooks.component.html',
  styleUrls: ['./bestbooks.component.css']
})
export class BestbooksComponent implements OnInit {
  hightTime = 1000;
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
    "slidesToShow": 6,  
    "slidesToScroll": 1,  
    "dots": false,  
    "infinite": true,
    "autoplay": true,
  };
}
