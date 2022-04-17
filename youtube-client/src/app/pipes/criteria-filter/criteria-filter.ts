import { Pipe, PipeTransform } from '@angular/core';
import {
  DIRECT_SORT_MULTIPLIER,
  REVERSE_SORT_MULTIPLIER,
} from 'src/app/constants/constant';
import { Item } from 'src/app/interfaces/search-item.model';
import { sortPublishingDate, sortViewCount } from 'src/app/utilities/utils';

@Pipe({
  name: 'dateFilter',
})
export default class DateFilterPipe implements PipeTransform {
  private data: Item[] = [];

  public transform(data: Item[], sortCriteria: string): Item[] {
    this.data = data;
    switch (sortCriteria) {
      case 'viewMin':
        return sortViewCount(data, DIRECT_SORT_MULTIPLIER);
      case 'viewMax':
        return sortViewCount(data, REVERSE_SORT_MULTIPLIER);
      case 'dateMin':
        return sortPublishingDate(data, DIRECT_SORT_MULTIPLIER);
      case 'dateMax':
        return sortPublishingDate(data, REVERSE_SORT_MULTIPLIER);
      default:
        return data;
    }
  }
}
