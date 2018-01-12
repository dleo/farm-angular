import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemEditorComponent } from './sale-item-editor.component';

describe('SaleItemEditorComponent', () => {
  let component: SaleItemEditorComponent;
  let fixture: ComponentFixture<SaleItemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleItemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
