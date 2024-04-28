import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  stud_firstname:string="";
  stud_lastname:string="";
  stud_email:string="";
  stud_pswd:string="";

  constructor(private route:Router,private admin:AdminService,private toastr:ToastrService){}
  register(){
    if(!this.stud_firstname&&!this.stud_lastname&&!this.stud_email&&!this.stud_pswd)
    // alert("Please fill the form")
    this.toastr.error("Please fill the form")
    else{
     this.admin.admin_email=this.stud_email;
     this.admin.admin_name=this.stud_firstname;
    //  alert("Register Successfull")
     this.toastr.success("Registration Successfull")
     this.route.navigateByUrl('login')
    }
  }
  

}
