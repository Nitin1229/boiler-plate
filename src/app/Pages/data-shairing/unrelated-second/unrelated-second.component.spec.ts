import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedSecondComponent } from './unrelated-second.component';

describe('UnrelatedSecondComponent', () => {
  let component: UnrelatedSecondComponent;
  let fixture: ComponentFixture<UnrelatedSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrelatedSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrelatedSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
