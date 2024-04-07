import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {

  constructor(private http: HttpClient) { }

  // Save Information Form
  saveinfo(functionName: any, data: any) {
    return this.http.post(config.apiUrl + functionName, data).pipe(map((res: any) => {
      return res;
    }));
  }

  //Get Information From Database
  getInformation(functionName: any){
    return this.http.get(config.apiUrl + functionName).pipe(tap(res => res), catchError(e => {
      throw new Error(e);
    }))
  }

   //Delete Information From Database
  deleteInfo(functionName: any){
    return this.http.delete(config.apiUrl + functionName).pipe(tap(res => res), catchError(e => {
      throw new Error(e);
    }))
  }

  //Update Information From Database
  updateInformation(functionName: any, data:any){
    return this.http.put(config.apiUrl + functionName, data).pipe(tap(res => { res }), catchError(e=>{
      throw new Error(e)
    }))
  }
 

}
