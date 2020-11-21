import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = {id:'',title:''}
  
  constructor(
    private _reportService: ReportsService
  ) { }

  ngOnInit() {
    this._reportService.getData().subscribe((resp:any) =>{
      this.data = resp;
    });
  }

}
