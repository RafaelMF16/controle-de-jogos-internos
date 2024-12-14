import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nomeTime = '';
  periodo = '';
  modalidade = '';
  genero = '';
  observacoes = '';

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      const serviceId = 'service_mzktxr7';
      const templateId = 'template_q54p1nr';
      const userId = 'D4UqHaO41cgwo7SJj';

      const templateParams = {
        nomeTime: this.nomeTime,
        periodo: this.periodo,
        modalidade: this.modalidade,
        genero: this.genero,
        observacoes: this.observacoes,
      };

      emailjs.send(serviceId, templateId, templateParams, userId).then(
        (result: EmailJSResponseStatus) => {
          console.log('E-mail enviado com sucesso!', result.text);
          alert('E-mail enviado com sucesso!');
          form.resetForm();
          this.router.navigate(['/pagina-inicial']);
        },
        (error) => {
          console.error('Erro ao enviar o e-mail', error.text);
          alert('Erro ao enviar o e-mail.');
        }
      );
    }
  }
}