import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BorrowedList } from "../_model/borrowed-list";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  borrowedList: BorrowedList[] = [];
  totalQuantity = new ReplaySubject<number>(1);
  totalQuantity$ = this.totalQuantity.asObservable();
  constructor() { }

  addToList(theBorrowedList: BorrowedList): void {

    // check whether theCartItem already exist in the cartItems;
    let existingBook: BorrowedList;
    let alreadyExistInList: boolean;
    if (this.borrowedList.length > 0) {
      for (const book of this.borrowedList) {
        if (book.id === theBorrowedList.id) {
          existingBook = book;
          break;
        }
      }

      alreadyExistInList = (existingBook !== undefined);
    }

    if (alreadyExistInList) {
      existingBook.soluong == 1;
      console.log(`da muon`)
    } else {
      this.borrowedList.push(theBorrowedList);
    }

    this.computeListTotal();
  }


  private computeListTotal(): void {

    let totalQuantityValue = 0;

    for (const currentBook of this.borrowedList) {
      totalQuantityValue += currentBook.soluong;
    }

    this.totalQuantity.next(totalQuantityValue);


    for (const book of this.borrowedList) {
      console.log(`title=${book.title}, soluong=${book.soluong}`);
    }
    console.log(`totalQUantity = ${totalQuantityValue}`);
    console.log('------');
  }

  removeItem(index: number) {
    this.borrowedList.splice(index, 1);
  }
}
