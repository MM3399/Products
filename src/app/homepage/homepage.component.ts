import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    JSON.stringify(this.products);
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
  categoryForFilter="All";
  name: string;
  price: string;
  description:string;
  category: string = 'Electronics';
  id=0;
  products = [{id: 0,name: 'Laptop' , price: '40000' , description: 'Best in its range', category: 'Electronics',}];
addProduct(){
  if(this.id!=0)
    this.id=this.id+1;
  this.temp={id:this.id,name: this.name,price: this.price, description: this.description, category: this.category};
  this.products.push(this.temp);
  console.log(this.products);
  this.name= '';
  this.category='';
  this.description='';
  this.price='';
  JSON.stringify(this.products);
}
removeProduct(id){
  console.log("Removal ID",id);
  for(let i=id+1;i<this.id+1;i++){
    this.products[i].id--;
    console.log("This product",i ,"id is",this.products[i].id)
  }
  this.products.splice(id,1);
  if(this.id>0){
      this.id--;
      console.log(this.id);
  }

}
}
