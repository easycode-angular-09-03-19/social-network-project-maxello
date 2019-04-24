import { Component, OnInit, Input } from '@angular/core';
import { HomeInfo } from '../../interfaces/home-info.interface';

@Component({
  selector: 'app-home-jumbo',
  templateUrl: './home-jumbo.component.html',
  styleUrls: ['./home-jumbo.component.css']
})
export class HomeJumboComponent implements OnInit {
  @Input() data: HomeInfo;
  constructor() { }

  ngOnInit() {
  }

}
