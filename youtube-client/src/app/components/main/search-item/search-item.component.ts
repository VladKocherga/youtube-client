import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  Input,
} from '@angular/core';
import { Item } from 'src/app/interfaces/search-item.model';
import { generateBorderColor } from 'src/app/utilities/utils';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements AfterViewChecked {
  @ViewChild('youtubeCard', { static: false })
  public youtubeCard: ElementRef = { nativeElement: '' };

  @Input() item!: Item;

  public ngAfterViewChecked(): void {
    const publicationDate: string = this.item?.snippet.publishedAt;
    this.youtubeCard.nativeElement.style.borderBottomColor =
      generateBorderColor(publicationDate);
  }
}
