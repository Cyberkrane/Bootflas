import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaRoutingModule } from './entrada-routing.module';
import { RawMaterialInComponent } from './pages/raw-material-in/raw-material-in.component';
import { RawMaterialStockComponent } from './pages/raw-material-stock/raw-material-stock.component';
import { RawMaterialEditComponent } from './pages/raw-material-edit/raw-material-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';


@NgModule({
  declarations: [
    RawMaterialInComponent,
    RawMaterialStockComponent,
    RawMaterialEditComponent,
    TableComponent,
    ButtonAddComponent
  ],
  imports: [
    CommonModule,
    EntradaRoutingModule,
    HttpClientModule
  ]
})
export class EntradaModule { }
