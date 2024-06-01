import { Component, Input, OnInit } from '@angular/core';
import { SocialRedBorderTop, SocialRedIcon } from '../../enums/social-red.enum';

@Component({
  selector: 'app-card-social-media',
  templateUrl: './card-social-media.component.html',
  styleUrl: './card-social-media.component.scss',
})
export class CardSocialMediaComponent implements OnInit {
  @Input() cardBorderTop: SocialRedBorderTop = SocialRedBorderTop.Instagram;
  @Input() username: string = '@username';
  @Input() fontAwesomeIcon: SocialRedIcon = SocialRedIcon.Instagram;
  @Input() totalFollowers: number = 99.5;
  @Input() newFollowers: number = 1500;

  asciiUpDowmFollowers: string = '▲';
  newFollowesClass: string = 'more-followers';
  

  ngOnInit(): void {
    this.calculateNewFollowers();
  }

  calculateNewFollowers(): void {
    if (this.newFollowers < 0) {
      this.newFollowesClass = 'less-followers';
      this.asciiUpDowmFollowers = '▼';
    }
    if (this.newFollowers > 0) {
      this.newFollowesClass = 'more-followers';
      this.asciiUpDowmFollowers = '▲';
    }
  }
}
