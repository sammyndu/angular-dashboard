import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCreateEditComponent } from './component-create-edit.component';

describe('ComponentCreateEditComponent', () => {
  let component: ComponentCreateEditComponent;
  let fixture: ComponentFixture<ComponentCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
