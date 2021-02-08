import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpriseComponent } from './interprise.component';

describe('InterpriseComponent', () => {
  let component: InterpriseComponent;
  let fixture: ComponentFixture<InterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
