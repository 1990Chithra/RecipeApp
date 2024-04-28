import { Component,OnInit} from '@angular/core';
import { UserapiService } from '../services/userapi.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
 
  allRecipies:any[]=[];
  favouriteList:any[]=[];
  searchText:string="";
  constructor(private api:UserapiService,private toastr:ToastrService,private route:Router){}
  ngOnInit(): void {
    this.viewRecipieList()
  }
  viewRecipieList(){
    this.api.viewRecipieAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allRecipies=res;
        
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
  }
  deleteRecipie(id:any){
    this.api.deleteRecipieAPI(id).subscribe({
      next:(res:any)=>{
        // alert("Recipie deleted successfully");
        this.toastr.error("Recipie deleted successfully")
        this.viewRecipieList()
      },
      error:(err:any)=>{
        console.log(err.message);
      }
    })
  }
  generatePDF(){
    let pdf=new jsPDF()
    let head=[['id','name','mealType','ingredients','instructions']];
    let body:any=[]

    this.allRecipies.forEach((item:any)=>{
      body.push([item.id,item.name,item.mealType,item.ingredients,item.instructions])
    })

    pdf.text("All Recipies",10,10)
    autoTable(pdf,{head,body})
    pdf.output("dataurlnewwindow")
    pdf.save("allrecipieslist.pdf")

  }
  favoriteRecipie(id:any){
    
  }
  
 
}
