import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByLastMessage',
})
export class SortByLastMessage implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Array<any>, ...args) {

    console.log(value)

    value.sort((a, b) => {
      console.log(a, b);
      if (!a.lastMessage) {
        a.lastMessage = {
          time: Date.now(),
        }
      }
      if (!b.lastMessage) {
        b.lastMessage = {
          time: Date.now(),
        }
      }
      return b.lastMessage.time - a.lastMessage.time;
    });

    return value;
  }
}
