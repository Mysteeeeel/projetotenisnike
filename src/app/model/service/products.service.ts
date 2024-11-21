import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class productsService{

  private products: Iproducts[] = [
    
    {id:1, name:'Nike Air Force', desc: 'The insole are confortable so you can wear them everyday', price:500, image:'../nike1.png'},
    {id:1, name:'Nike Air Max Excee', desc: 'The insole are confortable so you can wear them everyday', price:60.0, image:'../nike2.png'},
    {id:1, name:'Nike Air Max 270', desc: 'The insole are confortable so you can wear them everyday', price:40.0, image:'../nike3.png'},

  ];
  getProducts():Iproducts[]{
    return this.products;
  }
}