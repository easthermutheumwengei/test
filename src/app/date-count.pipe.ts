import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): unknown {
    let today: Date = new Date();
    let todaywithNoTime:any=new Date(today.getFullYear(), today.getMonth(),today.getDate())
    return null;
  }
}
