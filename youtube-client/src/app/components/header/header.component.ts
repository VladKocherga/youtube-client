import { Component } from '@angular/core';
import DataService from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  public isVisibleFilterContainer: boolean = false;

  constructor(private dataservice: DataService) {}

  public toggleContainerVisibility(isVisible: boolean) {
    this.dataservice.setVideoContainerVisible(isVisible);
  }
}
