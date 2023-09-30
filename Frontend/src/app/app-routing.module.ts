import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { GraficoComponent } from './components/grafico/grafico.component';

const routes: Routes = [
  { 
    path: `''`, 
    component: HomeComponent 
  },
  { 
    path: 'tabela', 
    component: TabelaComponent,
   
  },
  { 
    path: 'grafico', 
    component: GraficoComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
