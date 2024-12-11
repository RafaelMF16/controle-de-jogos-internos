import { Component } from '@angular/core';
import { ConfrontosComponent } from "../../componentes/confrontos/confrontos.component";
import { CabecalhoFormularioComponent } from "../../componentes/cabecalho-formulario/cabecalho-formulario.component";

@Component({
  selector: 'app-confrontos-resultados',
  imports: [ConfrontosComponent, CabecalhoFormularioComponent],
  templateUrl: './confrontos-resultados.component.html',
  styleUrl: './confrontos-resultados.component.css'
})
export class ConfrontosResultadosComponent {

}
