import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../_model/author';
import { Book } from '../_model/book';
import { AuthorService } from '../_service/author.service';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  books: Book[];
  authors: Author[];
  

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit(): void {
    
    this.listAuthor();
  }

  listAuthor(): void {
    this.authorService.getAuthorList().subscribe(
      data => {
        this.authors = data;
        // console.log(data);
      }
    )
  }
 
}
