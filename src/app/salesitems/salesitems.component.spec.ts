import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesitemsComponent } from './salesitems.component';

describe('SalesitemsComponent', () => {
  let component: SalesitemsComponent;
  let fixture: ComponentFixture<SalesitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
