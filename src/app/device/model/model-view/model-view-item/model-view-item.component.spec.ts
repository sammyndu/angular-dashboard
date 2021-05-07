import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelViewItemComponent } from './model-view-item.component';

describe('ModelViewItemComponent', () => {
  let component: ModelViewItemComponent;
  let fixture: ComponentFixture<ModelViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelViewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
