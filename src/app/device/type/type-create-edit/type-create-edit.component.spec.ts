import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCreateEditComponent } from './type-create-edit.component';

describe('TypeCreateEditComponent', () => {
  let component: TypeCreateEditComponent;
  let fixture: ComponentFixture<TypeCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
