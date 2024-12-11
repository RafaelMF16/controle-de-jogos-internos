import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfrontosService } from '../../services/Confrontos.service';

@Component({
  selector: 'app-confrontos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './confrontos.component.html',
  styleUrl: './confrontos.component.css'
})
export class ConfrontosComponent implements OnInit{
  confrontos: any[] = []; // Armazena os dados da API
  loading = true; // Indicador de carregamento

  constructor(private confrontosService: ConfrontosService) {}

  ngOnInit(): void {
    this.confrontosService.getConfrontos().subscribe(
      (data) => {
        console.log(data);
        this.confrontos = data // Acessa o array `confrontos` do JSON
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao carregar os dados:', error);
        this.loading = false;
      }
    );
  }
}