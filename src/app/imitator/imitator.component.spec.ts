import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImitatorComponent } from './imitator.component';

describe('ImitatorComponent', () => {
  let component: ImitatorComponent;
  let fixture: ComponentFixture<ImitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
