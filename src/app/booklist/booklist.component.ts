import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../_model/book';
import { BorrowedList } from '../_model/borrowed-list';
import { Category } from '../_model/category';
import { BookService } from '../_service/book.service';
import { CategoryService } from '../_service/category.service';
import { ListService } from '../_service/list.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: Book[];
  categories: Category[];
  currentAuthorId: number;
  pageOfBooks: Array<Book[]>;

  thePageNumber: number;
  thePageSize: number;
  theTotalElements: number;
  previousAuthorId: number;
  previousKeyword: string;
  constructor(private bookService: BookService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit(): void {
    // this.thePageNumber = 1;
    // this.thePageSize = 8;
    // this.theTotalElements = 0;
    this.listCategory();
    this.route.paramMap.subscribe(() => {
      this.listBook();
    });
  }

  // listBook(): void {
  //   this.bookService.getBookByDate().subscribe(
  //     data => {
  //       this.books = data;
  //       console.log(data);
  //     }
  //   )
  // }


  listCategory(): void {
    this.categoryService.getCate().subscribe(
      data => {
        this.categories = data;
        // console.log(data);
      }
    )
  }

  listBook(): void {
    if (this.route.snapshot.paramMap.has('keyword')) {
      this.handleSearchBook();
    } else {
      this.handleListBook();
    }
  }

  handleListBook(): void {
    const hasAuthorId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasAuthorId) {
      this.currentAuthorId = +this.route.snapshot.paramMap.get('id');
      this.bookService.getBookListByAuthorId(this.currentAuthorId).subscribe(data => { this.books = data });

    } else {
      // this.bookService.getBookList().subscribe(data => this.books = data);
      this.bookService.getBookByDate().subscribe(
        data => {
          this.books = data;
        }
      );
    }
  }


  handleSearchBook(): void {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    this.bookService.searchBook(theKeyword).subscribe(
      data => {
        this.books = data;
      }
    );
  }


  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }
  changeWebsite(e) {
    console.log(e.target.value);
  }


  // updatePageSize(event: any): void {
  //   this.thePageSize = event.target.value;
  //   this.thePageNumber = 1;
  //   this.listBook();
  // }

  addToList(theBook: Book): void {
    console.log(`Adding to list ${theBook.title}}`);
    const theBorrowedList = new BorrowedList(theBook);

    this.listService.addToList(theBorrowedList);
  }

  onChangePage(books: Book[]) {
    // update current page of items
    this.books = books;
  }
}
