import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ConfigurationComponent } from './configuration.component';

const configurationRoutes: Routes = [
    {
        path: 'configuration/status',
        component: StatusComponent
    },
    {
        path: 'configuration/skillset',
        component: SkillsetComponent
    },
    {
        path: 'configuration',
        component: ConfigurationComponent
    }
];

export const configurationRouting = RouterModule.forChild(configurationRoutes);
