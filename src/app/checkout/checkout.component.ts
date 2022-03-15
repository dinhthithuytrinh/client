import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BorrowedList } from '../_model/borrowed-list';
import { Borrowed } from '../_model/borrowed';
import { ListService } from '../_service/list.service';
import {CheckoutValidator} from '../_validators/checkoutValidator';
import { BorrowedItem } from '../_model/borrowed-item';
import { CheckoutService } from '../_service/checkout.service';
import { Borrow } from '../_model/borrow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;
  borrowedList: BorrowedList[] = [];
  totalQuantity = 0;
  constructor(private formBuilder: FormBuilder, private listService: ListService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.borrowedListDetail();
    this.listService.totalQuantity$.subscribe(data => this.totalQuantity = data);

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2), CheckoutValidator.notOnlyWhitespace]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2), CheckoutValidator.notOnlyWhitespace]),
        username: new FormControl('', [Validators.required, Validators.minLength(2), CheckoutValidator.notOnlyWhitespace]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        address: ['']
      }),

    });
  }
  onSubmit(): void {
    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      // return;
    }

    console.log(this.checkoutFormGroup.get('customer').value);
    const borrowed = new Borrowed();
    borrowed.totalQuantity = this.totalQuantity;


    const borrowedList = this.listService.borrowedList;

    // const orderItems: OrderItem[] = [];
    // for (let i = 0; i < cartItems.length; i++) {
    //   orderItems[i] = new OrderItem((cartItems[i]));
    // }
    const borrowedItem: BorrowedItem[] = borrowedList.map(listItem => new BorrowedItem(listItem));

    const borrow = new Borrow();

    borrow.customer = this.checkoutFormGroup.controls.customer.value;

    borrow.borrowedItems = borrowedItem;
    borrow.borrowed = borrowed;

    console.log(borrow);
    this.checkoutService.placeBorrowed(borrow).subscribe({
      next: response => {
        alert(`Your order has been received. \nOrder tracking number: ${response.borrowedTrackingNumber}`);
        this.resetList();
      },
      error: err => alert(`There is an error ${err.message}`)
    });

    
  }

  borrowedListDetail(): void {
    this.borrowedList = this.listService.borrowedList;

    this.listService.totalQuantity$.subscribe(
      data => this.totalQuantity = data
    );

  }
  private resetList(): void {
    this.listService.borrowedList = [];
    this.listService.totalQuantity.next(0);

    this.checkoutFormGroup.reset();

    this.router.navigateByUrl('/books').then(r => {});
  }

  get firstName(): AbstractControl {
    return this.checkoutFormGroup.get('customer.firstName');
  }

  get lastName(): AbstractControl {
    return this.checkoutFormGroup.get('customer.lastName');
  }
  get username(): AbstractControl {
    return this.checkoutFormGroup.get('customer.username');
  }
  get email(): AbstractControl {
    return this.checkoutFormGroup.get('customer.email');
  }
}
