import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { GroceryList } from "./grocery.component";

@Injectable({
    providedIn:'root'
})

export class GroceryService{

grocery_list = []
subject = new Subject<Array<{title:string}>>()

groceries = [
{food:'Apples (12)', foodtype:'Fruit', cost:3.50, fav:false},
{food:'Banana', foodtype:'Fruit', cost:0.99, fav:false},
{food:'Carrot', foodtype:'Vegetables', cost:0.25, fav:false},
{food:'Orange Juice', foodtype:'Misc.', cost:2.99, fav:false}
]

getGroceries(){

    return this.groceries
}

filter(foodtype){
    return this.groceries.filter(g=> g.foodtype ===foodtype)
}
updateFav(brand){
    this.groceries.forEach(g => {
        if(g.food === brand){
            g.fav = !g.fav
        }
    })

}

addProduct(prod){
    this.grocery_list.push(prod)
    this.subject.next(this.grocery_list)
}

deleteProduct(title:string){
    this.grocery_list = this.grocery_list.filter(product => product.title !== title)
    this.subject.next(this.grocery_list)
}


}