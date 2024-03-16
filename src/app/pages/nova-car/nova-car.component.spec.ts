import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaCarComponent } from './nova-car.component';

describe('NovaCarComponent', () => {
  let component: NovaCarComponent;
  let fixture: ComponentFixture<NovaCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovaCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
