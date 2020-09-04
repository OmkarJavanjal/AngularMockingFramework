import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveformComponent} from "./main/reactiveform/reactiveform.component";

const routes: Routes = [{path:'', component: ReactiveformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
