import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateString'
})
export class DateStringPipe extends DatePipe implements PipeTransform {

    transform(value: any, format: any): any {
        return super.transform(value, format);
    }
}
