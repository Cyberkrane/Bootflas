import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaRoutingModule } from './entrada-routing.module';
import { PagesComponent } from './pages/pages.component';
import { RawMaterialInComponent } from './pages/raw-material-in/raw-material-in.component';
import { RawMaterialTableComponent } from './pages/raw-material-table/raw-material-table.component';
import { RawMaterialStockComponent } from './pages/raw-material-stock/raw-material-stock.component';
import { RawMaterialEditComponent } from './pages/raw-material-edit/raw-material-edit.component';


@NgModule({
  declarations: [
    PagesComponent,
    RawMaterialInComponent,
    RawMaterialTableComponent,
    RawMaterialStockComponent,
    RawMaterialEditComponent
  ],
  imports: [
    CommonModule,
    EntradaRoutingModule
  ]
})
export class EntradaModule { }
