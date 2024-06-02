import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SocialRedIcon } from '../../enums/social-red.enum';

@Component({
  selector: 'app-card-likes',
  templateUrl: './card-likes.component.html',
  styleUrl: './card-likes.component.scss',
})
export class CardLikesComponent implements OnInit, OnChanges {
  @Input() fontAwesomeIcon: SocialRedIcon = SocialRedIcon.Instagram;
  @Input() total: number = 99.5;
  @Input() counter: number = 1500;
  @Input() title: string = 'Visitas';

  asciiUpDowmFollowers: string = '▲';
  newFollowesClass: string = 'more-followers';

  ngOnInit(): void {
    this.calculateNewFollowers();
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  calculateNewFollowers(): void {
    if (this.counter < 0) {
      this.newFollowesClass = 'less-followers';
      this.asciiUpDowmFollowers = '▼';
    }
    if (this.counter > 0) {
      this.newFollowesClass = 'more-followers';
      this.asciiUpDowmFollowers = '▲';
    }
  }
}
