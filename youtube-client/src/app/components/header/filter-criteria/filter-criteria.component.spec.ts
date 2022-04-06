import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import FilterCriteriaComponent from './filter-criteria.component';

describe('FilterCriteriaComponent', () => {
  let component: FilterCriteriaComponent;
  let fixture: ComponentFixture<FilterCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [FilterCriteriaComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FilterCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
