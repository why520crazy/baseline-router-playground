import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class BaselineDetailComponent {
  baselineId$ = this.route.paramMap.pipe(
    map((paramMap) => {
      return paramMap.get('id');
    })
  );

  constructor(private route: ActivatedRoute) {}
}
