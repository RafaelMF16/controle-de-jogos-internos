import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfrontosService } from '../../services/confrontos.service';

@Component({
  selector: 'app-atualizacao-de-confrontos',
  imports: [CommonModule, FormsModule],
  templateUrl: './atualizacao-de-confrontos.component.html',
  styleUrl: './atualizacao-de-confrontos.component.css',
})
export class AtualizacaoDeConfrontosComponent {
  dataConfronto: string = ''; // Data do confronto
  confrontos: any[] = []; // Lista de confrontos do dia

  constructor(private confrontosService: ConfrontosService) {}

  adicionarConfronto() {
    this.confrontos.push({
      timeA: '',
      timeB: '',
      horario: '',
      resultado: '',
      modalidade: '',
      generoMasculino: false,
      generoFeminino: false,
      generoMisto: false,
    });
  }

  removerConfronto(index: number) {
    this.confrontos.splice(index, 1);
  }

  aoClicarEmAtualizarConfrontos(form: any) {
    if (form.valid && this.confrontos.length > 0) {
      const payload = {
        data: this.dataConfronto,
        partidas: this.confrontos.map((confronto) => ({
          timeA: confronto.timeA,
          timeB: confronto.timeB,
          horario: confronto.horario,
          resultado: confronto.resultado || 'Aguardando resultado',
          modalidade: confronto.modalidade,
          genero: this.obterGeneroSelecionado(confronto),
        })),
      };

      const token = localStorage.getItem('token'); // Obtém o token do localStorage

      if (!token) {
        alert('Token não encontrado. Faça login novamente.');
        return;
      }

      this.confrontosService.atualizarConfrontos({ token, confronto: payload }).subscribe({
        next: (response: any) => {
          alert('Confrontos atualizados com sucesso!');
          form.resetForm(); // Reseta os campos e validações do formulário
          this.dataConfronto = '';
          this.confrontos = []; // Limpa a lista de confrontos
        },
        error: (err) => {
          console.error('Erro ao atualizar confrontos:', err);
          alert(err.error?.message || 'Erro ao atualizar confrontos. Tente novamente.');
        },
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  obterGeneroSelecionado(confronto: any): string[] {
    const generos: string[] = [];
    if (confronto.generoMasculino) generos.push('Masculino');
    if (confronto.generoFeminino) generos.push('Feminino');
    if (confronto.generoMisto) generos.push('Misto');
    return generos;
  }
}
