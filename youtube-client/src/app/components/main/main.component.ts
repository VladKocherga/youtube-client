import { Component } from '@angular/core';
import { Item } from 'src/app/interfaces/search-item.model';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class SearchComponent {
  public data: Item[] = [];

  public isVisibleContainer: boolean = false;

  constructor(private service: DataService) {
    this.service.currentContainerVisible.subscribe((value: boolean): void => {
      this.isVisibleContainer = value;
    });
    this.getData();
  }

  public async getData(): Promise<void> {
    this.data = await this.service.getData();
  }

  public setWordsCriteria(): string {
    let search: string = '';
    this.service.currentSearch.subscribe((searchValue: string): void => {
      search = searchValue;
    });
    return search;
  }

  public sortByCriteria(): string {
    let criteria: string = '';
    this.service.currentSortCriteria.subscribe((sortCriteria: string): void => {
      criteria = sortCriteria;
    });
    return criteria;
  }
}
