import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../service/product/product';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Product[], price: number): any {
   // console.log(value);
    return value.filter((data) => data.price > price);
  }

}
