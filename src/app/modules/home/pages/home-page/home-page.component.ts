import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { zip } from 'rxjs';
import { HomeInfo } from '../../interfaces/home-info.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homePageData: HomeInfo;
  challenges;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    zip(
      this.homeService.getHomePage(),
      this.homeService.getActiveChallenges()
    )
      .subscribe(([homePageData, { challenges }]: any) => {
        this.homePageData = homePageData;
        this.challenges = challenges;
        console.log(homePageData);
        console.log(challenges);
      }, (err) => {
        console.log(err);
      });
  }
}
