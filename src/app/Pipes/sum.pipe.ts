import { Pipe, PipeTransform } from '@angular/core';
import {isNumber} from "util";

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if (value) {
      let sum: number = 0.0;
      for (let s of value) {
        if (isNumber(s['price'])) {
          sum += s['price'];
        }
      }
      return sum;
    }
  }

}
