import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalCreateComponent } from './terminal-create.component';

describe('TerminalCreateComponent', () => {
  let component: TerminalCreateComponent;
  let fixture: ComponentFixture<TerminalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
