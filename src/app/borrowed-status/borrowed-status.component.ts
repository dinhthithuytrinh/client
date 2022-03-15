import { Component, OnInit } from '@angular/core';
import { ListService } from "../_service/list.service";

@Component({
  selector: 'app-borrowed-status',
  templateUrl: './borrowed-status.component.html',
  styleUrls: ['./borrowed-status.component.css']
})
export class BorrowedStatusComponent implements OnInit {

  constructor(public listService: ListService) { }

  ngOnInit(): void {
  }

}
