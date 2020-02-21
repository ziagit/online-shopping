import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonospaceComponent } from './monospace.component';

describe('MonospaceComponent', () => {
  let component: MonospaceComponent;
  let fixture: ComponentFixture<MonospaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonospaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonospaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
