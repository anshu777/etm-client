import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-employee',
    templateUrl: './employee-create.html',
    styleUrls: ['./employee-create.css']
})

export class CreateEmployeeComponent implements OnInit, OnDestroy {
    private teams;
    constructor(private router: Router, private dataService: DataService) {
        dataService.getList('team')
            .subscribe((data) => {
                this.teams = data;
            });
    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }
    addNewEmployee() {

    }
    cancel() {
        this.router.navigate(['employees']);
    }
}
