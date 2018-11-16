import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/* Project Feature Module */
import { ProjectsComponent } from './projects.component';
import { ProjectService } from './project.service';
import { ProjectsResolve } from './projects-resolve.service';

/* Project Router */
import { projectRouting } from './projects.routing';

@NgModule({
    imports: [SharedModule, projectRouting],
    declarations: [ProjectsComponent],
    providers: [ProjectService, ProjectsResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProjectsModule { }