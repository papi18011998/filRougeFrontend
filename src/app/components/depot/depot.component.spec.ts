import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotComponent } from './depot.component';

describe('DepotComponent', () => {
  let component: DepotComponent;
  let fixture: ComponentFixture<DepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
