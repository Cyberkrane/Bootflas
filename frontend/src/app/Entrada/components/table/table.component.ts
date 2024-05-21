import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RawMaterialService } from '../../services/raw-material.service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() title: string = 'Tabla';

  @Input() registros: any[] = [];
  @Input() headers: string[] = [];
  @Input() registerType: string = '';

  item: string = '';


  constructor(private router: Router,
    private tableservice: RawMaterialService,
  ) { }

  ngOnInit(): void {
    this.item = this.registerType;
  }

  editarRegistro(registro: any) {
    console.log('Editando registro:', registro);
  }

  borrarRegistro(registro: any) {
    console.log('Borrando registro:', registro);
  }


  goBack() {
    this.router.navigate([''])
  }
}
