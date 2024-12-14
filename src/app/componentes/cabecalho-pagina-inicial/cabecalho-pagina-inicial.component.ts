import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tooltip } from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cabecalho-pagina-inicial',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './cabecalho-pagina-inicial.component.html',
  styleUrl: './cabecalho-pagina-inicial.component.css'
})
export class CabecalhoPaginaInicialComponent {
  @ViewChild('form') form!: NgForm;
  usuario: string = '';
  senha: string = '';
  private tooltipList: Tooltip[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Inicializa tooltips
    const tooltipTriggerList = this.el.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]');
    this.tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  }

  abrirModal() {
    const modalElement = document.getElementById('loginModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); // Usa a classe Modal do Bootstrap

      // Limpa os campos ao fechar o modal
      modalElement.addEventListener('hidden.bs.modal', () => {
        this.limparCampos();
      });

      modal.show(); // Exibe o modal
    }
  }

  onSubmit() {
    if (this.usuario && this.senha) {
      console.log('Usuário:', this.usuario);
      console.log('Senha:', this.senha);
      alert('Login realizado com sucesso!');
      const modalElement = document.getElementById('loginModal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement); // Obtém a instância do modal
        modal?.hide(); // Fecha o modal
      }
    }
  }

  limparCampos() {
    this.usuario = '';
    this.senha = '';

    if (this.form) {
      this.form.reset();
    }
  }
}