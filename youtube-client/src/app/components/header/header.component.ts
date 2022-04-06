import { Component } from '@angular/core';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  public isVisibleFilterContainer: boolean = false;

  constructor(private service: DataService) {}

  public switchVisibleVideoContainer(isVisible: boolean) {
    this.service.getVideoContainerVisible(isVisible);
  }
}
