import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantApiService } from '../services/resturant-api.service';

@Component({
  selector: 'app-viewresturant',
  templateUrl: './viewresturant.component.html',
  styleUrls: ['./viewresturant.component.css']
})
export class ViewresturantComponent implements OnInit {



  restId:any
  restBody:any
  constructor(private activatedRoute:ActivatedRoute,
    private restService:ResturantApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']
      // console.log(this.restId);
    })

    //api call
    this.restService.viewRestuarant(this.restId)
    .subscribe((result)=>{
      this.restBody = result
      console.log(this.restBody);
      
    })
  }

}
