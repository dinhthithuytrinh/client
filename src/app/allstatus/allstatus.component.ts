import { Component, OnInit } from '@angular/core';
import { Book } from '../_model/book';
import { BookService } from '../_service/book.service';

@Component({
  selector: 'app-allstatus',
  templateUrl: './allstatus.component.html',
  styleUrls: ['./allstatus.component.css']
})
export class AllstatusComponent implements OnInit {

  public users = 0;
  books: Book[];

  constructor(private bookService: BookService) { }

  members: Members[] = [
    {
      username:'admin',
      email:'admin@gmail.com',
      role: 'admin'
    },
    {
      username:'staff',
      email:'staff@gmail.com',
      role: 'mod'

    },
    {
      username:'user',
      email:'user@gmail.com',
      role: 'user'
    },
    
  ]
  ngOnInit(): void {
    this.listBook();
    this.getuser();
  }
  listBook(): void {
    this.bookService.getBookList().subscribe(
      data => {
        this.books = data;
        console.log(data);
      }
    )
  }

  getuser()
  {
    this.members.forEach(mem => {
      if (mem.role == 'user') {
        this.users =+1;
        console.log(this.users)
      }
    });

  }
}
class Books {
  name : string;
  description : string;
}
class Members {
  username : string;
  email : string;
  role : string;
}