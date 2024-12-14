import { Component } from '@angular/core';
import { ConfrontosComponent } from "../../componentes/confrontos/confrontos.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-confrontos-resultados',
  imports: [
    ConfrontosComponent,
    CabecalhoComponent
],
  templateUrl: './confrontos-resultados.component.html',
  styleUrl: './confrontos-resultados.component.css'
})
export class ConfrontosResultadosComponent {

}
