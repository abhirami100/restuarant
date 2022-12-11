import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresturantComponent } from './viewresturant.component';

describe('ViewresturantComponent', () => {
  let component: ViewresturantComponent;
  let fixture: ComponentFixture<ViewresturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewresturantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewresturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
