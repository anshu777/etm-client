import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../shared/services/data.service';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  displayedColumns = ['id', 'name', 'primary'];
  skillSet: any;

  errorMessage: string;
  title = 'Employee Status';
  private isSelected: boolean;
  private isSingleSelected: boolean;
  private selectedRows: Array<any> = [];
  private disableSave = false;
  private showEditMode = false;
  private showSpinner: Boolean = false;
  private dataFetchSub: Subscription;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.showSpinner = true;
    this.dataFetchSub = this.dataService.getList('skillset/getlist')
      .finally(() => this.showSpinner = false)
      .subscribe(
        data => {
          this.mapData(data);
        }
      );
  }
  mapData(data: any) {
    this.skillSet = new MatTableDataSource(data);
    this.skillSet.paginator = this.paginator;
    this.skillSet.sort = this.sort;
  }

  cancel(){
    this.router.navigate(['configuration']);
  }
}
