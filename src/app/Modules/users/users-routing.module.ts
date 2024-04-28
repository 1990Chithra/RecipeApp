import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { FavouriteRecipieComponent } from './favourite-recipie/favourite-recipie.component';

const routes: Routes = [
  {path: '', component: RecipieListComponent},
  {path:'add',component:AddRecipieComponent},
  {path:'favourite',component:FavouriteRecipieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
