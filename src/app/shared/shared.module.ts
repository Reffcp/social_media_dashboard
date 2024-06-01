import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSocialMediaComponent } from './components/card-social-media/card-social-media.component';

@NgModule({
  declarations: [CardSocialMediaComponent],
  imports: [CommonModule],
  exports: [CardSocialMediaComponent],
})
export class SharedModule {}
