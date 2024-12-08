import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho-pagina-inicial',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho-pagina-inicial.component.html',
  styleUrl: './cabecalho-pagina-inicial.component.css'
})
export class CabecalhoPaginaInicialComponent {
  constructor(private router: Router) { }

  aoClicarIrParaFormulario() {
    this.router.navigate(['/formulario-inscricao'])
  }
}
