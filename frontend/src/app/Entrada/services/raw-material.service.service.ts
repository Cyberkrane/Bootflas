import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments.prod';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {

  private urlBase: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllMaterials(): Observable<any> {
    return this.http.get<any>(`${this.urlBase}/Products`).pipe(
      map((data) => data)
    );
  }
}
