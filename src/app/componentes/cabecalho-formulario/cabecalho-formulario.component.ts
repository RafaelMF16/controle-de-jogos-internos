import { Component, OnInit, ElementRef } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-cabecalho-formulario',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho-formulario.component.html',
  styleUrl: './cabecalho-formulario.component.css'
})
export class CabecalhoFormularioComponent {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Inicializa todos os tooltips na página
    const tooltipTriggerList = this.el.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  }
}