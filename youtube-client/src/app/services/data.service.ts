import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SERVER_LINK } from '../constants/constant';
import { Item } from '../interfaces/search-item.model';
import { IResponse } from '../interfaces/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  private videosData: Promise<Item[]> = this.getData();

  private search: BehaviorSubject<string> = new BehaviorSubject('');

  private isVideoContainer: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private sortCriteria: BehaviorSubject<string> = new BehaviorSubject('');

  public currentSearch: Observable<string> = this.search.asObservable();

  public currentContainerVisible: Observable<boolean> =
    this.isVideoContainer.asObservable();

  public currentSortCriteria: Observable<string> =
    this.sortCriteria.asObservable();

  public setSearchWord(word: string): void {
    this.search.next(word);
  }

  public setSortCriteria(criteria: string): void {
    this.sortCriteria.next(criteria);
  }

  public setVideoContainerVisible(visible: boolean): void {
    this.isVideoContainer.next(visible);
  }

  public getData(): Promise<Item[]> {
    this.videosData = fetch(`${SERVER_LINK}`)
      .then((response: Response) => response.json())
      .then((data: IResponse) => data.items);
    return this.videosData;
  }
}
