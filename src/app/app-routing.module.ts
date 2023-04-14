import { NgModule, inject } from '@angular/core';
import { ResolveFn, Route, RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { BaselineComponent } from './baseline/baseline.component';
import { BaselineListComponent } from './baseline/list/list.component';
import { BaselineDetailComponent } from './baseline/detail/detail.component';
import { ProjectStore } from './project-store';

function createBaselineRoute(
  configFactory: () => { apiPrefix: string }
): Route {
  return {
    path: 'baseline',
    component: BaselineComponent,
    providers: [
      {
        provide: 'config',
        useFactory: configFactory,
      },
    ],
    children: [
      {
        path: '',
        redirectTo: 'list/all',
        pathMatch: 'full',
      },
      {
        path: 'list/:categoryId',
        component: BaselineListComponent,
      },
      {
        path: ':id',
        component: BaselineDetailComponent,
        children: [],
      },
    ],
  };
}

const routes: Routes = [
  {
    path: 'projects/:pid',
    component: ProjectComponent,
    children: [
      createBaselineRoute(() => {
        const projectStore = inject(ProjectStore);
        return {
          apiPrefix: `/api/pjm/projects/${projectStore.id}`,
        };
      }),
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
