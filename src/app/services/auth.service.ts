import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string="https://localhost:7102/ConsumerapplicationController/"
  constructor(private http:HttpClient) { }

signUp(signUpObj:any){

  return this.http.post<any>(`${this.baseUrl}register`,signUpObj);

}
}
