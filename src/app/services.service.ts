import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient ) { }
  getProducts(){
    return this.http.get('http://localhost:3000/')
  }
  sendProducts(product){
    return this.http.post('http://localhost:3000/',product);
  }
  deleteProducts(producttobedeleted){
    return this.http.put('http://localhost:3000/',producttobedeleted);
  }
}
