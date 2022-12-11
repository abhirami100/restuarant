import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';
import { ResturantlistComponent } from './resturantlist/resturantlist.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewresturantComponent } from './viewresturant/viewresturant.component';

const routes: Routes = [
  //path for ResturantListComponent
  {
    path:'', component:ResturantlistComponent
  },
  //path for Viewresturantcomponent
  {
      path:'view-resturant/:id', component:ViewresturantComponent

  },
  //path for add-resturantcomponent
  {
    path:'add-resturant', component:AddResturantComponent
  },
  //path for update restuarantcomponent
  {
    path:'Update-restuarant/:id' ,component:UpdateRestuarantComponent
  },
  // path for Delete Restaurantcomponent
  {
    path:'delete-restuarant/:id',component:DeleteRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
