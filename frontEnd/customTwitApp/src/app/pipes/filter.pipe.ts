import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterPipe: string): any {
    let filterArray = [];
    let concatHashTag;

    if (filterPipe) {
      filterArray = value.filter(tweet => {
        if (tweet.hashTag.length > 0) {
          console.log(tweet.hashTag);
          concatHashTag = '';
          tweet.hashTag.forEach(element => {
            concatHashTag += element.text;
          } );
          return concatHashTag.toLowerCase().includes(filterPipe.toLowerCase());
        }  else {
          return false;
        }
      });
    } else {
      filterArray = [];
    }

    return filterArray;
  }

}
