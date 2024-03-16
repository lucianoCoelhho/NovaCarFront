import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoProfissionalComponent } from './plano-profissional.component';

describe('PlanoProfissionalComponent', () => {
  let component: PlanoProfissionalComponent;
  let fixture: ComponentFixture<PlanoProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanoProfissionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
