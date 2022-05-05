import { Component } from '@angular/core';
import { MAX_VIDEOS, MIN_SEARCH_LENGTH } from 'src/app/constants/constant';
import { Item } from 'src/app/interfaces/search-item.model';
import { IResponse } from 'src/app/interfaces/search-response.model';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  public isVisibleFilterContainer: boolean = false;

  public searchValue: string = '';

  constructor(private dataService: DataService) {}

  public async getSearchedVideos(): Promise<void> {
    if (this.searchValue.length < MIN_SEARCH_LENGTH) {
      return;
    }
    const currentSearchValue: string = this.searchValue;
    const timeOut: ReturnType<typeof setTimeout> = setTimeout((): void => {
      if (currentSearchValue === this.searchValue) {
        this.dataService
          .getSearchApi(this.searchValue)
          .subscribe((data: IResponse): void => {
            data.items.forEach((item: Item): void => {
              this.dataService.videoIds.push(item.id.videoId);
            });
            this.removeSuperfluousVideos();
            this.dataService
              .getVideoItems()
              .subscribe((videoData: IResponse): void => {
                this.dataService.videoData = videoData.items;
              });
          });
      } else {
        clearTimeout(timeOut);
      }
    }, 1000);
  }

  private removeSuperfluousVideos(): void {
    if (this.dataService.videoIds.length > MAX_VIDEOS)
      this.dataService.videoIds.splice(0, MAX_VIDEOS);
  }
}
