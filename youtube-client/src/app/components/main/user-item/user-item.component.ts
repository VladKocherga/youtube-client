import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { IUserCard } from 'src/app/interfaces/search-item.model';
import { generateBorderColor } from 'src/app/utilities/utils';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export default class UserItemComponent implements AfterViewChecked {
  @ViewChild('youtubeCard', { static: false })
  public youtubeCard: ElementRef = { nativeElement: '' };

  @Input() item!: IUserCard;

  public ngAfterViewChecked(): void {
    const publicationDate: string | undefined = this.item?.creatingDate;
    this.youtubeCard.nativeElement.style.borderBottomColor =
      generateBorderColor(publicationDate);
  }
}
