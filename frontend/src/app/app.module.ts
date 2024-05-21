import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EntradaModule } from './Entrada/entrada.module';
import { ProcesosModule } from './Procesos/procesos.module';
import { SalidaModule } from './Salida/salida.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    
    EntradaModule,
    ProcesosModule,
    SalidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
