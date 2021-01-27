import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'joinStr'
})
export class JoinPipe implements PipeTransform {

  transform(value: Array<string>, separator: string): string {
    return value.join(separator);
  }

}
