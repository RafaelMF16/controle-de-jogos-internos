import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoPaginaInicialComponent } from './cabecalho-pagina-inicial.component';

describe('CabecalhoPaginaInicialComponent', () => {
  let component: CabecalhoPaginaInicialComponent;
  let fixture: ComponentFixture<CabecalhoPaginaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoPaginaInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoPaginaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
