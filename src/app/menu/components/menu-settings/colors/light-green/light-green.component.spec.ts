import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightGreenComponent } from './light-green.component';

describe('LightGreenComponent', () => {
  let component: LightGreenComponent;
  let fixture: ComponentFixture<LightGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
