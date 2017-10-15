import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  formSubmitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', []),
        city: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required])
      }),
      cards: this.fb.array([this.buildForm()])
    });
  }

  buildForm() {
    return this.fb.group({
      cardNumber: new FormControl('', [Validators.required]),
      expiryMonth: new FormControl('', [Validators.required]),
      expiryYear: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required])
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

  addCustomer() {
    console.log(this.customerForm.value);
    this.formSubmitted = true;
    this.customerForm.reset();
  }

}
