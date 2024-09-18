import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
 // private listData =[]
  key:string=`7d3386f5975cfe597a06cd51fbefcbe8`
  constructor(private http:HttpClient) {}

  getItemList():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}`);
  }

  getItemById(itemId: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${itemId}?api_key=${this.key}`);
  }
  
}
