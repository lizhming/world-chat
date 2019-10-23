import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByTime',
})
export class SortByTime implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<any>, ...args) {

    value.sort((a, b) => {
      return a.time - b.time;
    });

    return value;
  }
}
