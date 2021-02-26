import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeSearch', pure: false
})
export class PokeSearchPipe implements PipeTransform {

  transform(value: any[], property: string, searchString: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((element) => {
        return element[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }
}
