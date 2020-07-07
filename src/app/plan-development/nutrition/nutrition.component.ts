import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  foodSelected : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClickFood(id : number){
    this.foodSelected = id;
  }

}
