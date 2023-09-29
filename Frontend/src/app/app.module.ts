import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from "@angular/material/card";
import { ModalComponent } from './components/modal/modal.component'
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'



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
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    NgChartsModule ,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
