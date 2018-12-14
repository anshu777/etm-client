import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/* Project Feature Module */
import { ProjectsComponent } from './projects.component';
import { ProjectCrudComponent } from './project-crud/project-crud.component';
import { ProjectService } from './project.service';
import { ProjectsResolve } from './projects-resolve.service';

/* Project Router */
import { projectRouting } from './projects.routing';

@NgModule({
    imports: [SharedModule, projectRouting],
    declarations: [ProjectsComponent, ProjectCrudComponent],
    providers: [ProjectService, ProjectsResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProjectsModule { }
