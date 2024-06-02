import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLikesComponent } from './card-likes.component';

describe('CardLikesComponent', () => {
  let component: CardLikesComponent;
  let fixture: ComponentFixture<CardLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
