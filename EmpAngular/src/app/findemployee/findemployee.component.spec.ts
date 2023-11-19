import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindemployeeComponent } from './findemployee.component';

describe('FindemployeeComponent', () => {
  let component: FindemployeeComponent;
  let fixture: ComponentFixture<FindemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
