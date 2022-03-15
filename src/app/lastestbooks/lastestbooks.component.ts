import { Component, OnInit } from '@angular/core';
import { Book } from '../_model/book';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-lastestbooks',
  templateUrl: './lastestbooks.component.html',
  styleUrls: ['./lastestbooks.component.css']
})
export class LastestbooksComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService) { }

  
  ngOnInit(): void {
    this.listBook();
  }

  listBook(): void {
    this.bookService.getBookByDate().subscribe(
      data => {
        this.books = data;
        console.log(data);
      }
    )
  }
}
