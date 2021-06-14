import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {CarsComponent} from "./components/home/cars/cars.component";
import {AddCarComponent} from "./components/home/add-car/add-car.component";


const routes:Routes = [
  {path:'', component:HomeComponent,children:[
      {path:'', redirectTo:'cars', pathMatch:'full'},
      {path:'cars', component:CarsComponent},
      {path:'add', component:AddCarComponent}
    ]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
