import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { FavouriteRecipieComponent } from './favourite-recipie/favourite-recipie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    AddRecipieComponent,
    RecipieListComponent,
    FavouriteRecipieComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
