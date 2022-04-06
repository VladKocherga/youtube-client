import { Component } from '@angular/core';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-criteria',
  templateUrl: './filter-criteria.component.html',
  styleUrls: ['./filter-criteria.component.scss'],
})
export default class FilterCriteriaComponent {
  constructor(private service: DataService) {}

  public set getSearch(word: string) {
    this.service.getSearchWord(word);
  }

  public setSortCriteria(criteriaSort: string): void {
    let currentSortCriteria: string = '';
    let resultCriteriaSort: string = criteriaSort;
    this.service.currentSortCriteria.subscribe((criteria: string): void => {
      currentSortCriteria = criteria;
    });
    if (criteriaSort === currentSortCriteria) {
      resultCriteriaSort = resultCriteriaSort.replace(/Min/gi, 'Max');
    }
    this.service.getSortCriteria(resultCriteriaSort);
  }
}
