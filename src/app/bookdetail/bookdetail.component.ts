import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../_model/book';
import { BorrowedList } from '../_model/borrowed-list';
import { BookService } from '../_service/book.service';
import { ListService } from '../_service/list.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  book: Book;
  books: Book[];
  currentAuthorId: number;
  // currentId = this.books;
  constructor(private bookService: BookService, private route: ActivatedRoute, private listService: ListService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleBookList();
    });
    this.route.paramMap.subscribe(() => {
      this.handleBookDetails();
    });
  }

  handleBookDetails(): void {
    this.bookService.getBook(+this.route.snapshot.paramMap.get('id')).subscribe(data => this.book = data);
  }

  handleBookList(): void {
    this.bookService.getProductListByAuthorId(+this.route.snapshot.paramMap.get('id')).subscribe(data => this.books = data);
  }

  // listBook(): void {
  //   this.currentAuthorId = +this.route.snapshot.paramMap.get('id');
  //   this.bookService.getProductListByAuthorId(data).subscribe(
  //     data => {
  //       this.books = data;
  //       console.log(data);
  //     }
  //   )
  // }
  addToList(): void {
    console.log(`Adding to cart ${this.book.title}`);
    const theBorrowedList = new BorrowedList(this.book);
    this.listService.addToList(theBorrowedList);
  }

}
