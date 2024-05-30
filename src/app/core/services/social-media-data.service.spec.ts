import { TestBed } from '@angular/core/testing';

import { SocialMediaDataService } from './social-media-data.service';

describe('SocialMediaDataService', () => {
  let service: SocialMediaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
