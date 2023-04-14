import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class BaselineListComponent {
  categoryId$ = this.route.paramMap.pipe(
    map((paramMap) => {
      return paramMap.get('categoryId');
    })
  );
  constructor(router: Router, private route: ActivatedRoute) {}
}
