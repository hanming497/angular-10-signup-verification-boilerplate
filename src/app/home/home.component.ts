import { Component, OnInit } from '@angular/core';

import { IStepOption, TourService } from 'ngx-ui-tour-md-menu';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
  account = this.accountService.accountValue;

  constructor(
    private accountService: AccountService,
    public tourService: TourService
  ) {}

  ngOnInit() {
    this.tourService.initialize([
      {
        anchorId: 'start-tour',
        title: 'Improve Your Sleep',
        content:
          'See lasting results with Cognitive behavioral therapy for insomnia (CBTi) that can benefit anyone with sleep problems.',
      },
      {
        anchorId: 'start-tour2',
        title: 'Log on a Sleep Diary',
        content:
          'Your sleep record helps us identify the sleep disruptions and other factors that affects your sleep quality.',
      },
      {
        anchorId: 'start-tour3',
        title: 'Designed For You',
        content:
          'The Tranqsleep Program is an web-based therapy done in cooperation with your sleep specialist.',
      },
    ]);
    this.tourService.start();
  }
}
