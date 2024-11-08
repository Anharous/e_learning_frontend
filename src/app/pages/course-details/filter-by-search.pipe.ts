import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch',
  standalone:true
})
export class FilterBySearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string, searchField: string): any[] {
    // If no items or no search term, return the original array
    if (!items || !searchTerm) {
      return items;
    }

    // Convert the search term to lowercase for case-insensitive matching
    searchTerm = searchTerm.toLowerCase();

    // Filter the items based on the search field
    return items.filter(item =>
      item[searchField]?.toLowerCase().includes(searchTerm)
    );
  }
}
