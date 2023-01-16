import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  MAX_VIDEOS,
  YOUTUBE_SEARCH_URL,
  YOUTUBE_VIDEO_URL,
} from '../constants/constant';
import { Item } from '../interfaces/search-item.model';
import { IResponse } from '../interfaces/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  private search: BehaviorSubject<string> = new BehaviorSubject('');

  private isVideoContainer: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private sortCriteria: BehaviorSubject<string> = new BehaviorSubject('');

  public currentSearch: Observable<string> = this.search.asObservable();

  public currentContainerVisible: Observable<boolean> =
    this.isVideoContainer.asObservable();

  public currentSortCriteria: Observable<string> =
    this.sortCriteria.asObservable();

  public videoIds: string[] = [];

  public videoData: Item[] | undefined;

  public setSearchWord(word: string): void {
    this.search.next(word);
  }

  public setSortCriteria(criteria: string): void {
    this.sortCriteria.next(criteria);
  }

  public setVideoContainerVisible(visible: boolean): void {
    this.isVideoContainer.next(visible);
  }

  constructor(private readonly http: HttpClient) {}

  public getVideoItems(): Observable<IResponse> {
    const queryParams: string[] = [
      'part=snippet,statistics',
      `id=${this.videoIds.join()}`,
    ];
    return this.http.get<IResponse>(
      `${YOUTUBE_VIDEO_URL}?${queryParams.join('&')}`
    );
  }

  public getSearchApi(searchValue: string): Observable<IResponse> {
    const queryParams: string[] = [
      'part=snippet',
      `maxResults=${MAX_VIDEOS}`,
      `q=${searchValue}`,
      'type=video',
    ];
    return this.http.get<IResponse>(
      `${YOUTUBE_SEARCH_URL}?${queryParams.join('&')}`
    );
  }
}
