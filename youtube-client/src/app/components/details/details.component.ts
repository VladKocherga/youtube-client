import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Item, IUserCard } from 'src/app/interfaces/search-item.model';
import DataService from 'src/app/services/data.service';
import YoutubeState from 'src/app/store/youtube.state';
import { generateBorderColor } from 'src/app/utilities/utils';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export default class DetailsComponent implements OnInit, AfterViewChecked {
  @ViewChild('detailsContainer', { static: false })
  private detailsContainer: ElementRef = { nativeElement: '' };

  public currentYoutubeItem: Item | undefined;

  public itemId: string | null = '';

  public userCards: IUserCard[] = [];

  public itemType: string | null = '';

  public currentUserItem: IUserCard | undefined;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.itemType = this.route.snapshot.paramMap.get('type');
    this.userCards = JSON.parse(
      this.store.selectSnapshot(YoutubeState.userCards) || '[]'
    );
    this.getDataVideo();
  }

  public async getDataVideo(): Promise<void> {
    if (this.dataService.videoData && this.itemType === 'youtube') {
      this.currentYoutubeItem = this.dataService.videoData.find(
        (el: Item): boolean => `${el.id}` === this.itemId
      );
    } else if (this.itemType === 'user') {
      this.currentUserItem = this.userCards.find(
        (el: IUserCard): boolean => `${el.id}` === this.itemId
      );
    } else {
      this.router.navigate(['/error']);
    }
  }

  public ngAfterViewChecked(): void {
    if (!this.currentYoutubeItem || !this.currentUserItem) {
      return;
    }
    const publicationDate: string | undefined =
      this.currentYoutubeItem?.snippet?.publishedAt ||
      this.currentUserItem?.creatingDate;
    this.detailsContainer.nativeElement.style.borderBottomColor =
      generateBorderColor(publicationDate);
  }
}
