import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantlistComponent } from './resturantlist/resturantlist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewresturantComponent } from './viewresturant/viewresturant.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { FormsModule } from '@angular/forms';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResturantlistComponent,
    HeaderComponent,
    FooterComponent,
    ViewresturantComponent,
    AddResturantComponent,
    UpdateRestuarantComponent,
    DeleteRestaurantComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
