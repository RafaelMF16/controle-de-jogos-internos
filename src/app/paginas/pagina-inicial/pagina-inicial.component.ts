import { Component } from '@angular/core';
import { BodyComponent } from "../../componentes/body/body.component";
import { CabecalhoPaginaInicialComponent } from '../../componentes/cabecalho-pagina-inicial/cabecalho-pagina-inicial.component';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    CabecalhoPaginaInicialComponent, 
    BodyComponent
  ],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

}