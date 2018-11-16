import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Team } from './team.model';

@Component({
    selector: 'et-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.css']
})

export class TeamsComponent implements OnInit, AfterViewInit {
    displayedColumns = ['id', 'name', 'setupDate', 'projectName'];
    teams: MatTableDataSource<Team>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    errorMessage: string;
    title = 'Teams';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        const tmData = this.route.snapshot.data['team'];
        this.teams = new MatTableDataSource(tmData);

       
    }

    ngAfterViewInit() {
        this.teams.paginator = this.paginator;
        this.teams.sort = this.sort;
    }
}