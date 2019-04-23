import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthGuard } from './../../guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
