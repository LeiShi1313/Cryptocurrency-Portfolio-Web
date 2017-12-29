import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSmall'
})
export class RemoveSmallPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.filter(object => {
        return object.amount >= 0.001;
      });
    }
  }

}
