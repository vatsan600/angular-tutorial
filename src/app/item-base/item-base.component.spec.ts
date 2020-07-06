import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBaseComponent } from './item-base.component';

describe('ItemBaseComponent', () => {
  let component: ItemBaseComponent;
  let fixture: ComponentFixture<ItemBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
