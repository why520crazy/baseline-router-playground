import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProjectStore } from '../project-store';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projectId$ = this.route.paramMap.pipe(
    map((paramMap) => {
      this.projectStore.setId(paramMap.get('pid')!);
      return paramMap.get('pid');
    })
  );

  constructor(
    private route: ActivatedRoute,
    private projectStore: ProjectStore
  ) {}
}
