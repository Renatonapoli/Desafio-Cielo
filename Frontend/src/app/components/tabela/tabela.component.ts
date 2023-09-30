import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  summary: any;
  items!: any[];
  pageNumber: number = 1;
  pageSize: number = 10;
  columns: string[] = ['id', 'Bandeira Cartão', 'Crédito', 'Status'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]); // Inicialize com um array vazio

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadSummary();
    this.loadItems();
    this.columns = ['id', 'Bandeira Cartão', 'Crédito', 'Status'];

    
  }

  loadSummary() {
    this.dataService.getSummary().subscribe(data => {
      this.summary = data;
    });
  }

 
  loadItems() {
    this.dataService.getItems(this.pageNumber, this.pageSize).subscribe(data => {
      this.items = data;
      this.dataSource.data = this.items; 
    });
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.loadItems();
  }
}