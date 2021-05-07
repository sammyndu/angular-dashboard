import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquirerCreateEditComponent } from './acquirer-create-edit.component';

describe('AcquirerCreateEditComponent', () => {
  let component: AcquirerCreateEditComponent;
  let fixture: ComponentFixture<AcquirerCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquirerCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquirerCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
