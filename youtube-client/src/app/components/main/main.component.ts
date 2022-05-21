import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Item, IUserCard } from 'src/app/interfaces/search-item.model';
import DataService from 'src/app/services/data.service';
import { IStore } from 'src/app/store/youtube.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class SearchComponent {
  public isVisibleContainer: boolean = false;

  public videoData: Item[] = [];

  public userVideosData: IUserCard[] = [];

  constructor(public dataService: DataService, private store: Store) {
    this.store.subscribe((state: IStore) => {
      this.videoData = [...state.YoutubeState.youtubeCards];
      this.userVideosData = JSON.parse(state.YoutubeState.userCards);
    });
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
