import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotopage(page: string) {
    this.router.navigate([page]);
}

}
