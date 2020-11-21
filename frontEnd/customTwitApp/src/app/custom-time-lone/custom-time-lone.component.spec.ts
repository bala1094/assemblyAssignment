import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimeLoneComponent } from './custom-time-lone.component';

describe('CustomTimeLoneComponent', () => {
  let component: CustomTimeLoneComponent;
  let fixture: ComponentFixture<CustomTimeLoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTimeLoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimeLoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
