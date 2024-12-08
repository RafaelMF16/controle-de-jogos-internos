import { Component } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { CabecalhoFormularioComponent } from "../../componentes/cabecalho-formulario/cabecalho-formulario.component";

@Component({
  selector: 'app-formulario-inscricao',
  standalone: true,
  imports: [FormularioComponent, CabecalhoFormularioComponent],
  templateUrl: './formulario-inscricao.component.html',
  styleUrl: './formulario-inscricao.component.css'
})
export class FormularioInscricaoComponent {

}
