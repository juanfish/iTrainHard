import { Component, OnInit } from '@angular/core';
import { PlanDevelopmentService } from './planDev.service';

@Component({
  selector: 'app-plan-development',
  templateUrl: './plan-development.component.html',
  styleUrls: ['./plan-development.component.scss']
})
export class PlanDevelopmentComponent implements OnInit {

  tabSeleccionada : number = 1;
  
  constructor() { }

  ngOnInit(): void {

  }

  onClickSegment(id : number){
    this.tabSeleccionada = id;
  }

}
