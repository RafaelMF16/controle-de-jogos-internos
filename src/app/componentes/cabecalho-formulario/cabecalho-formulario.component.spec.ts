import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoFormularioComponent } from './cabecalho-formulario.component';

describe('CabecalhoFormularioComponent', () => {
  let component: CabecalhoFormularioComponent;
  let fixture: ComponentFixture<CabecalhoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
