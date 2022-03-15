import { Borrowed } from "./borrowed";
import { BorrowedItem } from "./borrowed-item";
import { Customer } from "./customer";

export class Borrow {
    customer: Customer;
    borrowed: Borrowed;
    borrowedItems: BorrowedItem[];
}
