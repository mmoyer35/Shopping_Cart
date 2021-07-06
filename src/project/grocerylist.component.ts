import { Component } from "@angular/core";
import { GroceryService } from "./grocery.service";



@Component({
    selector: 'app-shopping-cart',
    template: `
    <h3>Grocery List Component</h3>
    <div *ngFor="let item of products">{{item.food}}</div>
    <br> 
    <div> Total: $ {{totalCost}} </div>

    `

})
export class ShoppingCartComponent {
    products = []
    totalCost = 0
    service:GroceryService
    constructor(svc:GroceryService){
        this.service =svc
    }

    ngOnInit(){
        this.service.subject.subscribe((groceries)=>{
            this.products = groceries
            let total = 0
                this.products.forEach(i=> {
                    total+=i.cost
                })
                this.totalCost = total
        })
    }
    
  
        }
