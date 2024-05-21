import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RawMaterialStockComponent } from './pages/raw-material-stock/raw-material-stock.component';
import { RawMaterialInComponent } from './pages/raw-material-in/raw-material-in.component';
import { RawMaterialEditComponent } from './pages/raw-material-edit/raw-material-edit.component';

const routes: Routes = [
  {
    path: '',
    children:[
      { path: 'stock', component: RawMaterialStockComponent},
      { path: 'receipt', component: RawMaterialInComponent },
      { path: 'edit', component: RawMaterialEditComponent},
      { path: '**', redirectTo: 'stock' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradaRoutingModule { }
