import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import YoutubeState from 'src/app/store/youtube.state';
import { RouterTestingModule } from '@angular/router/testing';
import environment from 'src/environments/environment';
import AdminComponent from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [
        ReactiveFormsModule,
        NgxsModule.forRoot([YoutubeState], {
          developmentMode: !environment.production,
        }),
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
