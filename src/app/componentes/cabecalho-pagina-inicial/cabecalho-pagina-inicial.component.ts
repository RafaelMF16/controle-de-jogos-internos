import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tooltip } from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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

  constructor(private el: ElementRef, private loginService: LoginService, private router: Router) { }

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
      this.loginService.autenticar(this.usuario, this.senha).subscribe({
        next: (response: any) => {
          // Caso o login seja bem-sucedido
          if (response.token) {
            localStorage.setItem('token', response.token); // Armazena o token
            console.log('Login realizado com sucesso!');
            this.router.navigate(['/atualizar-confrontos']); // Navega para a rota desejada
            this.fecharModal();
          }
        },
        error: (err) => {
          // Exibe mensagem de erro caso o login falhe
          console.error('Erro de autenticação:', err);
          alert('Credenciais inválidas. Tente novamente.');
        },
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  fecharModal() {
    const modalElement = document.getElementById('loginModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide(); // Fecha o modal
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