import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestaurantComponent } from '../delete-restaurant/delete-restaurant.component';

@Injectable({
  providedIn: 'root'
})
export class ResturantApiService {

  search=new BehaviorSubject("")

  constructor(private api:HttpClient) { }

  //to get all resturant details Api call
  allResturantList(){
    //api call
   return this.api.get('http://localhost:3000/restaurants')

  }

  //get only user requested restuarant
  viewRestuarant(restId:any){
   return this.api.get('http://localhost:3000/restaurants/'+restId)


  }

  //add a new restuarant api -post
  addRestuarant(restBody:any){
    return this.api.post('http://localhost:3000/restaurants',restBody)
  }
  //update a particular restaurant api -put
  updateRestaurant(restId:any,restBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)
  }
  //Delete particular restaurant api -delete
  deleteRestaurant(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/'+restId)
  }




}
