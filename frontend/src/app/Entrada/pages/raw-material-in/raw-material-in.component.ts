import { Component, OnInit } from '@angular/core';
import { RawMaterialService } from '../../services/raw-material.service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-raw-material-in',
  templateUrl: './raw-material-in.component.html',
  styleUrls: ['./raw-material-in.component.scss']
})
export class RawMaterialInComponent implements OnInit {

  constructor(private materialService: RawMaterialService) { 
  }

  ngOnInit(): void {
    this.materialService.getAllMaterials().subscribe(
      (data) => console.log(data)
    )
  }

}
