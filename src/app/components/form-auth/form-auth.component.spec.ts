import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthComponent } from './form-auth.component';

describe('FormAuthComponent', () => {
  let component: FormAuthComponent;
  let fixture: ComponentFixture<FormAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
