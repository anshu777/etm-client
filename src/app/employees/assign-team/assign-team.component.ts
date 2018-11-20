import { Component, Input, Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
import { DataService } from '../../shared/service/data-service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'et-assign-team',
    templateUrl: './assign-team.html',
    styleUrls: ['./assign-team.css']
})

export class AssignTeamComponent implements OnInit, OnDestroy {
    @Input() teamId: number;
    @Input() selectedEmp = [];
    settings = {};
    @Input()
    get processEmployees(): Employee[] {
        return this.processEmployee();
    }
    set processEmployees(val: Employee[]) {
        this.employees = val;
    }
    @Output() teamIdChange = new EventEmitter();
    @Output() selectedEmpChange = new EventEmitter();

    private teams;
    private employees: Employee[];
    private dataFetchSub: Subscription;

    constructor(private dataService: DataService) {
        this.dataFetchSub = this.dataService.getList('team')
            .subscribe(
                data => {
                    this.teams = data;
                }
            );
        this.teamId = 0;
    }

    ngOnInit() {
        this.settings = {
            text: '--Select Employee--',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: 'myclass custom-class'
        };
    }
    ngOnDestroy() {
        if (!!this.dataFetchSub) {
            this.dataFetchSub.unsubscribe();
        }
    }
    selectTeam(id: number) {
        this.teamIdChange.emit(id);
    }
    processEmployee(): Employee[] {
        const result: Array<any> = [];
        // if (this.employees.length > 0) {
        //     this.employees.forEach(item => {
        //         result.push({ id: Number(item.id), itemName: item.firstName });
        //     });
        // }
        return result;
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
}
