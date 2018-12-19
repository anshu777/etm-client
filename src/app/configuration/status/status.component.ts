import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../shared/services/data.service';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns = ['id', 'name'];
  employeeStatus: any;

  errorMessage: string;
  title = 'Employee Status';
  private isSelected: boolean;
  private isSingleSelected: boolean;
  private selectedRows: Array<any> = [];
  private disableSave = false;
  private showEditMode = false;
  private showSpinner: Boolean = false;
  private dataFetchSub: Subscription;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.showSpinner = true;
    this.dataFetchSub = this.dataService.getList('status/getlist')
      .finally(() => this.showSpinner = false)
      .subscribe(
        data => {
          this.mapData(data);
        }
      );
  }
  mapData(data: any) {
    this.employeeStatus = new MatTableDataSource(data);
    this.employeeStatus.sort = this.sort;
  }

  cancel(){
    this.router.navigate(['configuration']);
  }
}
