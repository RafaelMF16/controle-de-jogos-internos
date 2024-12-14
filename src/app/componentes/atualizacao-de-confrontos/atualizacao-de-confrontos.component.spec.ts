import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoDeConfrontosComponent } from './atualizacao-de-confrontos.component';

describe('AtualizacaoDeConfrontosComponent', () => {
  let component: AtualizacaoDeConfrontosComponent;
  let fixture: ComponentFixture<AtualizacaoDeConfrontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizacaoDeConfrontosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizacaoDeConfrontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
