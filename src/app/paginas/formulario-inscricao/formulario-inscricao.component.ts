import { Component } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-formulario-inscricao',
  standalone: true,
  imports: [
    FormularioComponent, 
    CabecalhoComponent
  ],
  templateUrl: './formulario-inscricao.component.html',
  styleUrl: './formulario-inscricao.component.css'
})
export class FormularioInscricaoComponent {

}
