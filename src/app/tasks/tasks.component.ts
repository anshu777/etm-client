import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Task } from './task.model';

@Component({
    selector: 'et-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.css']
})

export class TasksComponent implements OnInit, AfterViewInit {
    displayedColumns = ['id', 'name', 'createdBy', 'createdDate'];
    tasks: MatTableDataSource<Task>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    errorMessage: string;
    title = 'Tasks';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        const tData = this.route.snapshot.data['tasks'];
        this.tasks = new MatTableDataSource(tData);
    }

    ngAfterViewInit() {
        this.tasks.paginator = this.paginator;
        this.tasks.sort = this.sort;
    }
}