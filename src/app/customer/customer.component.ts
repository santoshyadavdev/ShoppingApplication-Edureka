import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: new FormControl('', []),
      dob: new FormControl('', []),
      email: new FormControl('', []),
      mobile: new FormControl('', []),
      address: this.fb.group({
        addressLine1: new FormControl('', []),
        addressLine2: new FormControl('', []),
        city: new FormControl('', []),
        pin: new FormControl('', [])
      }),
      cards: this.fb.array([this.buildForm()])
    });
  }

  buildForm() {
    return this.fb.group({
      cardNumber: new FormControl('', []),
      expiryMonth: new FormControl('', []),
      expiryYear: new FormControl('', []),
      cvv: new FormControl('', [])
    });
  }

  addCard() {
    const card = this.customerForm.controls['cards'] as FormArray;
    card.push(this.buildForm());
  }

  removeCard(i: number) {
    const card = this.customerForm.controls['cards'] as FormArray;
    card.removeAt(i);
  }

}
