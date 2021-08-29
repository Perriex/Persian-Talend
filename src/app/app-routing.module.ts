import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./layouts/header/header.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'',redirectTo:'/signUp', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
