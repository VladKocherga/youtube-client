import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/interfaces/search-item.model';

@Pipe({
  name: 'keywordFilter',
})
export default class KeywordFilterPipe implements PipeTransform {
  private data: Item[] = [];

  public transform(data: Item[], wordFilter: string): Item[] {
    this.data = data;
    if (!data || !wordFilter) {
      return data;
    }
    return data.filter(
      (el: Item): boolean =>
        el.snippet.title.toLowerCase().indexOf(wordFilter.toLowerCase()) !== -1
    );
  }
}
