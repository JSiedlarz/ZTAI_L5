import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// {map} from 'rxjs/operators/map';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private http : HttpClient) {
  }

  getAll() {
    return this.http.get(this.url + '/photos')
    //   .pipe(
    //     map((x:any[]) => x.slice(0,20))
    // );
  }
  get(id){
    return this.http.get(this.url + '/photos/' + id);
  }
}
