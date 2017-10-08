import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { Product } from '../../service/product/product';
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

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }
  constructor() { }

  ngOnInit() {
  }

  sendDataToParent() {
    this.visibe.emit(true);
    this.message.emit('This is message from child');
  }
}
