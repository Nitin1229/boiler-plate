import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayErrorComponent } from './gateway-error.component';

describe('GatewayErrorComponent', () => {
  let component: GatewayErrorComponent;
  let fixture: ComponentFixture<GatewayErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
