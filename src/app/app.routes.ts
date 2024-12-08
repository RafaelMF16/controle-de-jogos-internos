import { Routes } from '@angular/router';
import { FormularioInscricaoComponent } from './paginas/formulario-inscricao/formulario-inscricao.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';

export const routes: Routes = [
    {
        path: 'pagina-inicial',
        component: PaginaInicialComponent,
        
    },

    {
        path: 'formulario-inscricao',
        component: FormularioInscricaoComponent,
    },

    {
        path: '',
        redirectTo: '/pagina-inicial',
        pathMatch: 'full'
    }
];