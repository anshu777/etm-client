import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Project } from './project.model';

@Component({
    selector: 'et-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./employees.css']
})

export class ProjectsComponent implements OnInit, AfterViewInit {
    displayedColumns = ['id', 'projectName', 'projectManager', 'clientName', 'officeAddress', 'startDate', 'dueDate'];
    projects: MatTableDataSource<Project>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    errorMessage: string;
    title = 'Projects';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        const pData = this.route.snapshot.data['project'];
        this.projects = new MatTableDataSource(pData);
    }

    ngAfterViewInit() {
        this.projects.paginator = this.paginator;
        this.projects.sort = this.sort;
    }
}