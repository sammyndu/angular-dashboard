import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquirerViewItemComponent } from './acquirer-view-item.component';

describe('AcquirerViewItemComponent', () => {
  let component: AcquirerViewItemComponent;
  let fixture: ComponentFixture<AcquirerViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquirerViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquirerViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
