import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraficoComponent } from './grafico.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe o HttpClientTestingModule

describe('GraficoComponent', () => {
  let component: GraficoComponent;
  let fixture: ComponentFixture<GraficoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoComponent],
      imports: [HttpClientTestingModule], // Adicione HttpClientTestingModule aqui
    });

    fixture = TestBed.createComponent(GraficoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});