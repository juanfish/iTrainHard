import { Component, OnInit } from '@angular/core';
import { PlanDevelopmentService } from '../planDev.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  pdReferenc : PlanDevelopmentService;

  constructor(private pd : PlanDevelopmentService) {
    this.pdReferenc = this.pd;
  }

  ngOnInit(): void {
    
  }

}
