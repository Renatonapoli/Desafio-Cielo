import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaComponent } from './tabela.component';
import { MatPaginatorModule } from '@angular/material/paginator'; // Importe o MatPaginatorModule
import { HttpClientModule } from '@angular/common/http'

describe('TabelaComponent', () => {
  let component: TabelaComponent;
  let fixture: ComponentFixture<TabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaComponent],
      imports: [MatPaginatorModule, HttpClientModule], // Adicione o MatPaginatorModule aqui
    });

    fixture = TestBed.createComponent(TabelaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});