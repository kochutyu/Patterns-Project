import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'splitStr'
})
export class SplitPipe implements PipeTransform {

  transform(value: string, separator: string): Array<string> {
    return value.split(separator);
  }

}
