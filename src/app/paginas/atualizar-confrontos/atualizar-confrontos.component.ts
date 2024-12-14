import { Component } from '@angular/core';
import { AtualizacaoDeConfrontosComponent } from "../../componentes/atualizacao-de-confrontos/atualizacao-de-confrontos.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-atualizar-confrontos',
  imports: [AtualizacaoDeConfrontosComponent, CabecalhoComponent],
  templateUrl: './atualizar-confrontos.component.html',
  styleUrl: './atualizar-confrontos.component.css'
})
export class AtualizarConfrontosComponent {

}
