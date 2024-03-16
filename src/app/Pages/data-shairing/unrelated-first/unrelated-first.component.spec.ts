import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedFirstComponent } from './unrelated-first.component';

describe('UnrelatedFirstComponent', () => {
  let component: UnrelatedFirstComponent;
  let fixture: ComponentFixture<UnrelatedFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrelatedFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrelatedFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
