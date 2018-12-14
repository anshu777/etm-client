import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

import { ProjectsResolve } from './projects-resolve.service';

const projectRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent,
        resolve: {
            project: ProjectsResolve
        }
    }
];

export const projectRouting = RouterModule.forChild(projectRoutes);
