import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeViewItemComponent } from './type-view-item.component';

describe('TypeViewItemComponent', () => {
  let component: TypeViewItemComponent;
  let fixture: ComponentFixture<TypeViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
