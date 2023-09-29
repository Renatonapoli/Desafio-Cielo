import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa o HttpClientTestingModule para lidar com solicitações HTTP falsas
      providers: [DataService],
    });

    // Inicializa o serviço e o HttpTestingController
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica se há solicitações HTTP pendentes e as limpa
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve summary data', () => {
    const mockSummaryData = {
      "totalQuantity":1546,
      "totalAmount":313388,
      "totalNetAmount":301847.02,
      "totalAverageAmount":202.71,
      "initialDate":"2021-05-26",
      "finalDate":"2021-05-26"
    };

    // Faz uma solicitação falsa para o resumo e verifica a resposta
    service.getSummary().subscribe((data) => {
      expect(data).toEqual(mockSummaryData);
    });

    // Verifica se a solicitação HTTP está correta
    const req = httpMock.expectOne('http://localhost:3000/summary');
    expect(req.request.method).toBe('GET');

    // Envie uma resposta falsa
    req.flush(mockSummaryData);
  });

  it('should retrieve items data', () => {
    const pageNumber = 1;
    const pageSize = 10;
    const mockItemsData = {
      "id":"114606514478703", 
        "merchantId":"2000463023",
        "paymentNode":485173,
        "cnpjRoot":485116,
        "date":"2021-05-26T12:12:55",
        "paymentType":"Crédito à vista",
        "cardBrand":"Mastercard",
        "authorizationCode":"378216",
        "truncatedCardNumber":"1014",
        "grossAmount":80.0,
        "netAmount":76.88,
        "terminal":"00032668",
        "administrationFee":3.9,
        "channelCode":15,
        "channel":"Super Link / Digitada",
        "withdrawAmount":0.0,
        "minimumMDRAmmount":-3.12,
        "mdrTaxAmount":0.0,
        "mdrFeeAmount":-3.12,
        "status":"Aprovada"
    };

    // Faz uma solicitação falsa para os itens e verifica a resposta
    service.getItems(pageNumber, pageSize).subscribe((data) => {
      expect(data).toEqual(mockItemsData);
    });

    // Verifica se a solicitação HTTP está correta
    const req = httpMock.expectOne(`http://localhost:3000/items?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    expect(req.request.method).toBe('GET');

    // Envie uma resposta falsa
    req.flush(mockItemsData);
  });
});
