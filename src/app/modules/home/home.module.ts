import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from "./home-routing.module";
import { AuthGuard } from './../../guards/auth.guard';
import { MatButtonModule } from '@angular/material';

import { HomeService } from './services/home.service';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';

import { ChallengeCardComponent } from '../../common/components/challenge-card/challenge-card.component';
import { ChallengesListComponent } from '../../common/components/challenges-list/challenges-list.component';
import { EmptyListComponent } from '../../common/components/empty-list/empty-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeInnerComponent,
    ChallengeCardComponent,
    ChallengesListComponent,
    EmptyListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule
  ],
  providers: [AuthGuard, HomeService]
})
export class HomeModule { }
