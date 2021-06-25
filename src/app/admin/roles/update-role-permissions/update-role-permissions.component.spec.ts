import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRolePermissionsComponent } from './update-role-permissions.component';

describe('UpdateRolePermissionsComponent', () => {
  let component: UpdateRolePermissionsComponent;
  let fixture: ComponentFixture<UpdateRolePermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRolePermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRolePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
