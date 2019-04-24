import { Component, OnInit, Input } from '@angular/core';
import { HomeInfo } from '../../interfaces/home-info.interface';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})
export class HomeInfoComponent implements OnInit {
  @Input() data: HomeInfo;
  constructor() { }

  ngOnInit() {
  }

}
