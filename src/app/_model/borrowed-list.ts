
import { DatePipe } from "@angular/common";
import { Book } from "./book";
export class BorrowedList {
    id: number;
    title: string;
    images: string
    leftover: number;
    soluong: number;
    borrowedDate: Date = new Date();
    returnedDate: Date =new Date();
    currentDate: DatePipe

    constructor(book: Book ){
        this.id = book.id;
        this.title = book.title;
        this.images = book.images;
        this.leftover = book.leftover;
        this.soluong = 1;
        this.borrowedDate.getDate();
        this.returnedDate.setDate(this.borrowedDate.getDate() + 7)
        // this.borrowedDate = this.currentDate.transform((new Date), 'yyyy/MM/dd h:mm:ss');
        // this.returnedDate.setDate(this.borrowedDate.getDate() + 7);
    }

    
}

