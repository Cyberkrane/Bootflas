import { Component, OnInit } from '@angular/core';
import { RawMaterialService } from '../../services/raw-material.service.service';

@Component({
  selector: 'app-raw-material-stock',
  templateUrl: './raw-material-stock.component.html',
  styleUrls: ['./raw-material-stock.component.scss']
})
export class RawMaterialStockComponent implements OnInit {

    title: string = 'Products';
    item: string = 'Product';

    registros: any[] = [];
    headers: string[] = [];

    constructor( private tableservice: RawMaterialService,){}

    ngOnInit(): void {
      this.getTableProducts();
    }

    getTableProducts() {
      this.tableservice.getAllMaterials().subscribe(data => {
        this.registros = data;
        this.headers = Object.keys(data[0]);
      })
    }
  }
  

