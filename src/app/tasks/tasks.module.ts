import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/* Tasks Feature Module */
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';
import { TasksResolve } from './tasks-resolve.service';

/* Tasks Router */
import { tasksRouting } from './tasks.routing';

@NgModule({
    imports: [SharedModule, tasksRouting],
    declarations: [TasksComponent],
    providers: [TaskService, TasksResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TasksModule { }