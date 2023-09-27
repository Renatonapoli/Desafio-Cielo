import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { GraficoComponent } from './components/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabelaComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
