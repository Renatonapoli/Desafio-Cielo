import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
  export class GraficoComponent implements OnInit {
    
    public barChartOptions: ChartOptions = {
      responsive: true,
    };
    public barChartLabels: string[] = [];
    public barChartType: ChartType = 'bar';
    public barChartLegend: boolean = true;
    public barChartData: ChartDataset[] = [];
  
    constructor(private httpClient: HttpClient) { }

  
    ngOnInit(): void {
      this.getDataFromAPI().subscribe((data: any) => {
       
        this.barChartLabels = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7' ]; 
        this.barChartData = [
          { data: [data[0].netAmount, data[1].netAmount, data[2].netAmount, data[3].netAmount, data[4].netAmount, data[5].netAmount, data[6].netAmount], label: 'Net Amount' },
          { data: [data[0].grossAmount, data[1].grossAmount, data[2].grossAmount, data[3].grossAmount, data[4].grossAmount, data[5].grossAmount, data[6].grossAmount], label: 'Gross Amount' }
        ]; 
    });
    }

    private getDataFromAPI(): Observable<any> {
      return this.httpClient.get<any>('http://localhost:3000/items');
  }

  }

