import { Component } from '@angular/core';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class SearchComponent {
  public isVisibleContainer: boolean = false;

  constructor(public dataService: DataService) {
    this.dataService.currentContainerVisible.subscribe(
      (value: boolean): void => {
        this.isVisibleContainer = value;
      }
    );
  }

  public setWordsCriteria(): string {
    let search: string = '';
    this.dataService.currentSearch.subscribe((searchValue: string): void => {
      search = searchValue;
    });
    return search;
  }

  public sortByCriteria(): string {
    let criteria: string = '';
    this.dataService.currentSortCriteria.subscribe(
      (sortCriteria: string): void => {
        criteria = sortCriteria;
      }
    );
    return criteria;
  }
}
