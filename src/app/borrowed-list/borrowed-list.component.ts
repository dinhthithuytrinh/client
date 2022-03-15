import { Component, OnInit } from '@angular/core';
import { BorrowedList } from '../_model/borrowed-list';
import { ListService } from '../_service/list.service';

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent implements OnInit {


  borrowedList: BorrowedList[] = [];
  totalQuantity = 0;
  constructor(public listService: ListService) { }

  ngOnInit(): void {
    this.borrowedListDetail();
  }


  borrowedListDetail(): void {
    this.borrowedList = this.listService.borrowedList;

        this.listService.totalQuantity$.subscribe(
        data => this.totalQuantity = data
    );

  }
  removeItem(index: number): void {
    this.listService.removeItem(index);
    this.totalQuantity -= 1;
  }
}
