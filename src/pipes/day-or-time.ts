import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayOrTime',
})
export class DayOrTime implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    let date = new Date(value);
    let today = new Date();
    let showDay = true;
    let ampm;
    if (today.getDate() == date.getDate() && today.getMonth() == date.getMonth() && today.getFullYear() == date.getFullYear()) {
      showDay = false;
      ampm = (date.getHours() >= 12) ? "pm" : "am";
    }
    return showDay ? (date.getMonth() + 1 + '-' + date.getDate()) : ((date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + ':' + date.getMinutes() + ampm)
  }
}
