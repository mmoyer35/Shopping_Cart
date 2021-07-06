import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ShortenPipe } from './shorten.pipe';
import { ObservSampleComponent } from './obsersample.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ParkComponent } from './park.component';
import { GroceryList } from 'src/project/grocery.component';
import { ShoppingCartComponent } from 'src/project/grocerylist.component';



@NgModule({
  declarations: [ //Component,Pipe,Directive
    AppComponent,
    GroceryList,
    PostComponent,
    ShoppingCartComponent,
    GroceryList,
    ObservSampleComponent,

    ShortenPipe,

    ParkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
