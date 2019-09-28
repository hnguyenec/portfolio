import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectResolver } from '@portfolio/projects/utils';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DetailComponent,
        resolve: { project: ProjectResolver }
      }
    ])
  ],
  declarations: [DetailComponent]
})
export class ProjectsFeatureDetailModule {}
