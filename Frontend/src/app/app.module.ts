import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from "@angular/material/card";
import { ModalComponent } from './components/modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabelaComponent,
    GraficoComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
