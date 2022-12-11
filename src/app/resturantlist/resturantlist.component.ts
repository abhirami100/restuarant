import { Component, OnInit } from '@angular/core';
import { ResturantApiService } from '../services/resturant-api.service';

@Component({
  selector: 'app-resturantlist',
  templateUrl: './resturantlist.component.html',
  styleUrls: ['./resturantlist.component.css']
})
export class ResturantlistComponent implements OnInit {

  restuarantLists:any;
  // lDate:any
  filterString:any="";

  constructor(private restApi:ResturantApiService) { }

  ngOnInit(): void {

    //asynchronous
    this.restApi.allResturantList()
    .subscribe((result)=>{
      console.log(result);
      this.restuarantLists = result
      
    })

    // this.lDate = new Date()
      this.restApi.search.subscribe((data)=>{
      this.filterString =data
      console.log(this.filterString);
      
    })

  }

}
