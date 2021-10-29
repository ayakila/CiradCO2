import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculGesComponent } from './calcul-ges.component';

describe('CalculGesComponent', () => {
  let component: CalculGesComponent;
  let fixture: ComponentFixture<CalculGesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculGesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculGesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
