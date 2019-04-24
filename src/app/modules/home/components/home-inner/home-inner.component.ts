import { Component, OnInit, Input } from '@angular/core';
import { HomeInfo } from '../../interfaces/home-info.interface';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {
  @Input() data: HomeInfo;
  constructor(
  ) { }

  ngOnInit() {
  }
  
}
