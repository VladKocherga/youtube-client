import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import YoutubeState from 'src/app/store/youtube.state';
import environment from 'src/environments/environment';
import MainComponent from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        NgxsModule.forRoot([YoutubeState], {
          developmentMode: !environment.production,
        }),
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
