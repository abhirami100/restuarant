import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantApiService } from '../services/resturant-api.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css']
})
export class DeleteRestaurantComponent implements OnInit {

  restId:any;

  constructor(private activatedRoute:ActivatedRoute , private apiService:ResturantApiService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data)=>{
      console.log(data)
    this.restId = data['id']
    console.log(this.restId);
      
      
    }
    )

    //call delete restaurant from service
    this.apiService.deleteRestaurant(this.restId)
    .subscribe(()=>{
      alert('Requested Restaurant Details Deleted Successfully!!.. ')
      this.router.navigateByUrl('')
    })
  }

}
