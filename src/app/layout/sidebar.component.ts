import { Component } from '@angular/core';
import { style } from '@angular/animations';

@Component ({
    selector: 'et-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.css']
})

export class SidebarComponent {
    heading = 'Employee & Timesheet Management';
}
