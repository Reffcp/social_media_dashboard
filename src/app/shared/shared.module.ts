import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSocialMediaComponent } from './components/card-social-media/card-social-media.component';
import { CardLikesComponent } from './components/card-likes/card-likes.component';

@NgModule({
  declarations: [CardSocialMediaComponent, CardLikesComponent],
  imports: [CommonModule],
  exports: [CardSocialMediaComponent, CardLikesComponent],
})
export class SharedModule {}
