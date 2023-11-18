import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LMComponent } from './lm.component';

describe('LMComponent', () => {
  let component: LMComponent;
  let fixture: ComponentFixture<LMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
