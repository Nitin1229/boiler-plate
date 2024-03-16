import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShairingComponent } from './data-shairing.component';

describe('DataShairingComponent', () => {
  let component: DataShairingComponent;
  let fixture: ComponentFixture<DataShairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataShairingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
