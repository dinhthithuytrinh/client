import { BorrowedList } from "./borrowed-list";
export class BorrowedItem {
    images: String;
    title: String;
    quantity: number;
    bookId: number;
    constructor(borrowedList: BorrowedList){
        this.images = borrowedList.images;
        this.title = borrowedList.title;
        this.quantity = borrowedList.soluong;
        this.bookId = borrowedList.id;
    }
}
