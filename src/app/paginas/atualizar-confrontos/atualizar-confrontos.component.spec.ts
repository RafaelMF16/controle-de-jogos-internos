import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarConfrontosComponent } from './atualizar-confrontos.component';

describe('AtualizarConfrontosComponent', () => {
  let component: AtualizarConfrontosComponent;
  let fixture: ComponentFixture<AtualizarConfrontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarConfrontosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarConfrontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
