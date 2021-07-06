import { Component } from "@angular/core";
import { GroceryService } from "./grocery.service";
import { Subject } from "rxjs"
@Component({
    selector: 'app-grocerylist',
    template: `
    <h4>Grocery List</h4>
    <select (change)="filterItems($event)">
    <option>Fruit</option>
    <option>Vegetables</option>
    <option>Misc.</option>
    </select>

    <div [ngClass]="{favorite:g.fav}" *ngFor="let g of allgroceries"> 
    <h4>{{g.food}} {{g.foodtype}} {{g.cost}} </h4> 
    <br>
    <button (click)="onAdd(g)" >Add to cart</button>
    </div>
    `,
    styles: [
`
.favorite {
    background-color: #dff

}`

    ]


})
export class GroceryList{
    allgroceries = []
    subject = new Subject<Array<{title:string}>>()

    constructor(private gService: GroceryService){

}


ngOnInit(){

this.allgroceries = this.gService.getGroceries()

}

filterItems(e){

    console.log(e.target.value)
    this.allgroceries = this.gService.filter(e.target.value)
}

setFavorite(g){
    this.gService.updateFav(g.brand)

}

onAdd(g){
    this.gService.addProduct(g)
  }
}