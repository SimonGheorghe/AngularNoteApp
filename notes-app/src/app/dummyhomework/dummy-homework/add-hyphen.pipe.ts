import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addHyphen'
})
export class AddHyphenPipe implements PipeTransform {

  transform(text: string): string {
    return "-" + text + "-";
  }

}
