import { Component, Input, Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
import { DataService } from '../../shared/services/data.service';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
    selector: 'et-assign-team',
    templateUrl: './assign-team.html',
    styleUrls: ['./assign-team.css']
})

export class AssignTeamComponent implements OnInit, OnDestroy {
    private teamId: number;
    private selectedEmp = [];
    settings = {};

    @Output() teamIdChange = new EventEmitter();
    @Output() selectedEmpChange = new EventEmitter();

    private teams;
    private employees: Array<any> = [];
    private dataFetchSub: Subscription;

    constructor(private router: Router, private dataService: DataService) {

    }

    ngOnInit() {
        this.settings = {
            text: '--Select Employee--',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: 'myclass custom-class'
        };
        this.dataFetchSub = this.dataService.getList('team/getlist')
            .subscribe(
                data => {
                    this.teams = data;
                }
            );
        this.teamId = 0;

        this.dataFetchSub = this.dataService.getList('employee/getoptionlist')
            .subscribe(
                data => {
                    this.employees = [];
                    data.forEach(item => {
                        this.employees.push({ id: Number(item.Id), itemName: item.Name });
                    });
                }
            );
    }

    ngOnDestroy() {
        if (!!this.dataFetchSub) {
            this.dataFetchSub.unsubscribe();
        }
    }

    selectTeam(id: number) {
        this.teamIdChange.emit(id);
    }

    onItemSelect(item: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }
    OnItemDeSelect(item: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }
    onSelectAll(items: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }
    onDeSelectAll(items: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }

    assignTeam() {
        // Write logic to save.
        // Both Team and Employee present here.
        // this.showAssignTeam = false;
    }
    cancel() {
        this.router.navigate(['employees']);
    }
}
