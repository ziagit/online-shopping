import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkGreenComponent } from './dark-green.component';

describe('DarkGreenComponent', () => {
  let component: DarkGreenComponent;
  let fixture: ComponentFixture<DarkGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
