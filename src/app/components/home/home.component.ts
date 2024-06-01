import { Component, OnInit } from '@angular/core';
import { SocialMediaDataService } from '../../core/services/social-media-data.service';
import { SocialMediaDataInterface } from '../../shared/interfaces/social-media-data.interface';
import {
  SocialRedBorderTop,
  SocialRedIcon,
} from '../../shared/enums/social-red.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  activeDarkMode = false;
  socialMediaData: SocialMediaDataInterface = {} as SocialMediaDataInterface;
  socialRedIcon = SocialRedIcon;
  socialRedBorderTop = SocialRedBorderTop;
  totalGolbalFollowers: number = 0;

  constructor(private smdService: SocialMediaDataService) {}

  ngOnInit() {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'true') {
      document.body.classList.add('dark-mode');
      this.activeDarkMode = true;
    }
    this.getSocialMediaData();
  }

  getSocialMediaData() {
    this.smdService.getSocialMediaData().subscribe((data: any) => {
      this.socialMediaData = data[0];
      this.calculateTotalFollowers();
    });
  }

  calculateTotalFollowers() {
    this.totalGolbalFollowers =
      this.totalGolbalFollowers +
      this.socialMediaData.top_data.facebook.total_followers;
    this.totalGolbalFollowers =
      this.totalGolbalFollowers +
      this.socialMediaData.top_data.instagram.total_followers;
    this.totalGolbalFollowers =
      this.totalGolbalFollowers +
      this.socialMediaData.top_data.twitter.total_followers;
    this.totalGolbalFollowers =
      this.totalGolbalFollowers +
      this.socialMediaData.top_data.youtube.total_followers;
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkMode.toString());
    this.activeDarkMode = darkMode;
  }
}
