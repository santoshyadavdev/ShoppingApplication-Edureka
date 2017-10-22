import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appcurrency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args1: string, args2: number): any {
    return args1 + '. ' + value * args2;
  }

}
