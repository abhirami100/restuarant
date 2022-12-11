import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantApiService } from '../services/resturant-api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {

  

  restId:any;
  restBody:any;
  reviews:any=[];

  constructor(private activatedRoute:ActivatedRoute , private restService:ResturantApiService,private router:Router) { }

  ngOnInit(): void {
    //get restuarant id
    this.activatedRoute.params.subscribe((data)=>{
      
      this.restId = data['id']
    })
    //get restuarant detail
    this.restService.viewRestuarant(this.restId)
    .subscribe((result)=>{
      this.restBody = result
      // console.log(this.restBody);
      
    })

  }

  updateRestaurant(form:any){
    let updateRestaurant={
      id:parseInt(form.value.id),
      name:form.value.name,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      reviews:[
        {
          name:form.value.rvname,
          date:form.value.date,
          rating:parseInt(form.value.rating),
          comments:form.value.comments
        }

      ]
      
    }
    console.log(updateRestaurant);
    this.restService.updateRestaurant(this.restId,updateRestaurant)
    .subscribe((data)=>{
      alert('Restaurant Details Updated Successfully!!..')
      this.router.navigateByUrl('')

    })
    
  }


}
