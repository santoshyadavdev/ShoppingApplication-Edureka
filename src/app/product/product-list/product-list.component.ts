import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { MatDialog } from '@angular/material';

import { Product } from '../../service/product/product';
import { ProductEditComponent } from '../product-edit/product-edit.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() productList: Product[];
  @Input() title: string;
  @Output() visibe = new EventEmitter<boolean>();
  @Output() message = new EventEmitter<string>();
  mrp: number = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  sendDataToParent() {
    this.visibe.emit(true);
    this.message.emit('This is message from child');
  }

  editProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductEditComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
