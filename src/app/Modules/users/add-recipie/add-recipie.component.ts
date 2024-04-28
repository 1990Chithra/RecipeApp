import { Component } from '@angular/core';
import { userModel } from '../users.model';
import { UserapiService } from '../services/userapi.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-recipie',
  templateUrl: './add-recipie.component.html',
  styleUrls: ['./add-recipie.component.css']
})
export class AddRecipieComponent {
 user:userModel={}

constructor(private api:UserapiService,private route:Router,private toastr:ToastrService){}

addRecipie(){
  this.api.addRecipieAPI(this.user).subscribe({
    next:(res:any)=>{
      console.log(res);
      // alert("recipie added successfully")
      this.toastr.success("recipie added successfully")
      setTimeout(()=>{
        this.route.navigateByUrl('/users')
      },2000)
      
    },
  })
   console.log(this.user);
    
  }
  
    
  
 }


