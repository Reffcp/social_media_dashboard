import { NgModule } from '@angular/core';
import { NavigationError, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// utilizamos mainUrlThisApp para obtener la url completa de la app
const mainUrlThisApp = window.location.origin;
const url404 =
  'https://reffcp.github.io/404-not-found/?pathOrigin=' + mainUrlThisApp;

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: url404,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        window.location.href = url404;
      }
    });
  }
}
