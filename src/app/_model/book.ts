import { Author } from "./author";
import { Category } from "./category";

export interface Book{
    id: number,
    sku: string,
    title : string,
    description : string,
    images : string,
    quantity: number,
    leftover: number,
    rating: number,
    times: number,
    status: boolean,
    created_at: Date,
    updated_at: Date,
    author: Author,
    bookCat: Category[],
}