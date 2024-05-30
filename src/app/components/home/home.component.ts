import { Component, OnInit } from '@angular/core';
import { SocialMediaDataService } from '../../core/services/social-media-data.service';
import { SocialMediaDataInterface } from '../../shared/interfaces/social-media-data.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  activeDarkMode = false;
  socialMediaData: SocialMediaDataInterface = {} as SocialMediaDataInterface;

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
    this.smdService
      .getSocialMediaData()
      .subscribe((data: SocialMediaDataInterface) => {
        this.socialMediaData = data;
      });
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkMode.toString());
    this.activeDarkMode = darkMode;
  }
}
