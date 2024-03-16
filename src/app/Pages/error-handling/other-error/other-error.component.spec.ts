import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherErrorComponent } from './other-error.component';

describe('OtherErrorComponent', () => {
  let component: OtherErrorComponent;
  let fixture: ComponentFixture<OtherErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
