import {product} from './product';

export class productClass implements product{
    _id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    constructor(id:string,name:string,price: string, description: string, category: string){
        this._id=id;
        this.name=name;
        this.price=price;
        this.description=description;
        this.category=category;
    }
}