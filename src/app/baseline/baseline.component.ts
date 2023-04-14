import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-baseline',
  templateUrl: './baseline.component.html',
  styleUrls: ['./baseline.component.scss'],
})
export class BaselineComponent {
  constructor(
    public route: ActivatedRoute,
    @Inject('config') public config: { apiPrefix: string }
  ) {}
}
