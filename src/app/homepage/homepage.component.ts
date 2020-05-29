import { Component, OnInit } from '@angular/core';
import {ServicesService } from '../services.service'
import { product } from '../shared/product';
import { productClass } from '../shared/productclass';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  button: boolean = true;
  constructor(private service:ServicesService ) { }
  product: product = new  productClass('','','','','');
  ngOnInit(): void {
    this.service.getProducts().subscribe((data)=>{
      this.product=data as productClass;
      this.refreshProducts();
    })
  }
  options = [
    { id: 0, name: "Electronics" },
    { id: 1, name: "Household" },
    { id: 2, name: "All" } 
  ];
  option = [
    { id: 0, name: "Electronics" },
    { id: 1, name: "Household" }
  ];
  temp;
  id: string;
  categoryForFilter="All";
  name: string;
  price: string;
  description:string;
  category: string = 'Electronics';

addProduct(){
  this.temp={name: this.name,price: this.price, description: this.description, category: this.category};

  this.name= '';
  this.category='';
  this.description='';
  this.price='';
  this.service.sendProducts(this.temp).subscribe(data => {console.log(data)
  alert(data)});
  this.refreshProducts();
}
removeProduct(producttobedeleted){
      console.log(producttobedeleted);
      this.service.deleteProducts(producttobedeleted).subscribe(data=>{console.log(data)
      alert(data)})
      this.refreshProducts();
  }
  refreshProducts(){
    this.service.getProducts().subscribe((data)=>{
      this.product=data as productClass;
    })
  }
  editProduct(){
    this.button=true;
    this.temp={id:this.id, name: this.name,price: this.price, description: this.description, category: this.category};
    console.log(this.temp); 
    this.name= '';
    this.category='';
    this.description='';
    this.price='';
    this.service.sendProducts(this.temp).subscribe(data => {console.log(data)
      alert(data)});
    this.refreshProducts();
  }
  changeButton(p){
    this.button=false;
    this.name=p.name;
    this.price=p.price;
    this.category=p.category;
    this.description=p.description;
    this.id=p._id;
  }
}

