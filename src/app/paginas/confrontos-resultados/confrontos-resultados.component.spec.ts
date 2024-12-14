import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrontosResultadosComponent } from './confrontos-resultados.component';

describe('ConfrontosResultadosComponent', () => {
  let component: ConfrontosResultadosComponent;
  let fixture: ComponentFixture<ConfrontosResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfrontosResultadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfrontosResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
