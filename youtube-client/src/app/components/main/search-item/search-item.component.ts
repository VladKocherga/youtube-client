import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  Input,
} from '@angular/core';
import {
  BORDERCOLOR,
  DAYS,
  MILLISECONDS_IN_DAY,
} from 'src/app/constants/constant';
import { Item } from 'src/app/interfaces/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements AfterViewChecked {
  @ViewChild('youtubeCard', { static: false })
  public youtubeCard: ElementRef = { nativeElement: '' };

  @Input() item!: Item;

  public ngAfterViewChecked() {
    const publicationDate: string = this.item?.snippet.publishedAt;
    const dayAfterPublishing: number =
      (Date.now() - new Date(publicationDate).valueOf()) / MILLISECONDS_IN_DAY;
    if (dayAfterPublishing <= DAYS.minDay) {
      this.youtubeCard.nativeElement.style.borderBottomColor = `${BORDERCOLOR.blue}`;
    } else if (dayAfterPublishing <= DAYS.middleDay) {
      this.youtubeCard.nativeElement.style.borderBottomColor = `${BORDERCOLOR.green}`;
    } else if (dayAfterPublishing >= DAYS.maxDay) {
      this.youtubeCard.nativeElement.style.borderBottomColor = `${BORDERCOLOR.red}`;
    } else {
      this.youtubeCard.nativeElement.style.borderBottomColor = `${BORDERCOLOR.yellow}`;
    }
  }
}
