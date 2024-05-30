import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  activeDarkMode = false;

  ngOnInit() {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'true') {
      document.body.classList.add('dark-mode');
      this.activeDarkMode = true;
    }
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkMode.toString());
    this.activeDarkMode = darkMode;
  }
}
