import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeRoutingModule } from "./home-routing.module";
import { AuthGuard } from './../../guards/auth.guard';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule
  ],
  providers: [AuthGuard]
})
export class HomeModule { }
