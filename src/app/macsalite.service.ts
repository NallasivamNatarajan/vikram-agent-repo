import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MacsaliteService {

  private baseUrl = 'http://localhost:8080/springboot-angular';
  private createUrl = '/macsalite/create';
  private updateUrl = '/macsalitesUpdate';
  private detailsUrl = '/macsalitesDetail';
  private deleteUrl = '/macsalitesDelete';
  private list = '/macsalites';
  private validUser = '/macsalite/validUser';
  private check = '/macsalite/check';

  constructor(private http: HttpClient) { }

  getMacsalite(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl+this.detailsUrl}/${id}`);
  }

  createMacsalite(macsalite: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl+this.createUrl}`, macsalite);
  }

  updateMacsalite(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl+this.updateUrl}/${id}`, value);
  }

  deleteMacsalite(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl+this.deleteUrl}/${id}`, { responseType: 'text' });
  }

  getMacsalitesList(): Observable<any> {
    return this.http.get(`${this.baseUrl+this.list}`);
  }

  getSpringBootConnection(): Observable<any> {
    return this.http.get(`${this.baseUrl+this.check}`);
  }

  getValidUser(userName: string, password: string): Observable<any>{
    return this.http.get(`${this.baseUrl+this.validUser}/${userName}/${password}`);
  }
}
