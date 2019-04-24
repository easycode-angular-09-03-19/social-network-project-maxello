import {Component, Input, OnInit} from '@angular/core';
import { Challenge } from 'app/interfaces/challenge.interface';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge: Challenge;
  constructor() { }

  ngOnInit() {
  }

}
