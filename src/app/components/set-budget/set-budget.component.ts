import { Component, OnInit } from '@angular/core';
import {BudgetService} from "../../services/budget.service";

@Component({
  selector: 'app-set-budget',
  templateUrl: './set-budget.component.html',
  styleUrls: ['./set-budget.component.css']
})
export class SetBudgetComponent implements OnInit {

  constructor(private budgetService: BudgetService) { }
  totalBudget: number = 0;
  ngOnInit(): void {
    this.totalBudget = this.budgetService.getTotalBudget();
  }

  setTotalBudget(totalBudget: number): void {
    this.budgetService.setTotalBudget(totalBudget);
  }

  submitForm() {
    this.budgetService.setTotalBudget(this.totalBudget);
  }
}
