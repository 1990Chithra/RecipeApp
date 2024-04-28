import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  stud_email:string="";
  stud_pswd:string="";
  constructor(private route:Router,private toastr:ToastrService){}
  login(){
    if(this.stud_email&& this.stud_pswd)
    {
      // alert("login successfull");
      this.toastr.success("login successfull")
      this.route.navigateByUrl('dashboard')
    }
    else{
      // alert("Please fill the form")
      this.toastr.error("Please fill the form")
    }
   

  }

}
