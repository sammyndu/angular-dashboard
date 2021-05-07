import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewItemComponent } from './component-view-item.component';

describe('ComponentViewItemComponent', () => {
  let component: ComponentViewItemComponent;
  let fixture: ComponentFixture<ComponentViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
