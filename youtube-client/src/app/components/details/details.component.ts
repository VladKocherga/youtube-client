import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BORDERCOLOR,
  DAYS,
  MILLISECONDS_IN_DAY,
} from 'src/app/constants/constant';
import { Item } from 'src/app/interfaces/search-item.model';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export default class DetailsComponent implements OnInit, AfterViewChecked {
  @ViewChild('detailsContainer', { static: false })
  private detailsContainer: ElementRef = { nativeElement: '' };

  private data: Item[] = [];

  public currentItem: Item | undefined;

  public itemId: string | null = '';

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  public async getData(): Promise<void> {
    this.data = await this.service.getData();
    this.currentItem = this.data.find(
      (el: Item): boolean => el.id === this.itemId
    );
    if (!this.currentItem) {
      this.router.navigate(['/error']);
    }
  }

  public ngAfterViewChecked(): void {
    if (!this.currentItem) {
      return;
    }
    const publicationDate: string = this.currentItem.snippet.publishedAt;
    const dayAfterPublishing: number =
      (Date.now() - new Date(publicationDate).valueOf()) / MILLISECONDS_IN_DAY;
    if (dayAfterPublishing <= DAYS.minDay) {
      this.detailsContainer.nativeElement.style.borderBottomColor = `${BORDERCOLOR.blue}`;
    } else if (dayAfterPublishing <= DAYS.middleDay) {
      this.detailsContainer.nativeElement.style.borderBottomColor = `${BORDERCOLOR.green}`;
    } else if (dayAfterPublishing >= DAYS.maxDay) {
      this.detailsContainer.nativeElement.style.borderBottomColor = `${BORDERCOLOR.red}`;
    } else {
      this.detailsContainer.nativeElement.style.borderBottomColor = `${BORDERCOLOR.yellow}`;
    }
  }
}
