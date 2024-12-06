import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculator, ErrorMessage, ResultCategory } from '../models/calculator';

//uuid
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit {
  title: string = 'Body Mass Calculator';
  calcWeight: number = 0;
  calcHeight: number = 0;
  resultNumber: number = 0;
  calculator: Calculator[] = [];
  errorMessage: ErrorMessage = ErrorMessage.None;
  resultCategories: ResultCategory = ResultCategory.None;

  //run the code block, when component initialized/mount
  ngOnInit() {
    const storedCalculator = localStorage.getItem('calculator');
    this.calculator = storedCalculator ? JSON.parse(storedCalculator) : [];
  }

  //list of calculated BMI
  addNew() {
    if (this.calcWeight && this.calcHeight) {
      this.calculator = [
        ...this.calculator,
        {
          id: uuidv4(),
          weight: this.calcWeight,
          height: this.calcHeight,
          resultnumber: this.resultNumbers(),
          resultcaregorywoman: this.resultCategoryWoman(),
          resultcategoryman: this.resultCategoryMan(),
        },
      ];
      this.errorMessage = ErrorMessage.None;
      localStorage.setItem('calculator', JSON.stringify(this.calculator));
    } else {
      this.errorMessage = ErrorMessage.MissingFields;
    }
  }
  deleteCalculator(id: string) {
    this.calculator = this.calculator.filter((calc) => calc.id !== id);
    localStorage.setItem('calculator', JSON.stringify(this.calculator));
  }
  //the ".toFixed()makes the number type to string" then the "parseFloat" makes the string to number
  //use the toFixed(2) to cut the end of number after two character of decimal point
  resultNumbers() {
    return parseFloat(
      (
        this.calcWeight /
        ((this.calcHeight / 100) * (this.calcHeight / 100))
      ).toFixed(2)
    );
  }

  resultCategoryWoman() {
    console.log('Result Number:', this.resultNumbers());

    if (this.resultNumbers() <= 18.5) {
      console.log('Category: Underweight');
      return ResultCategory.Underweight;
    } else if (this.resultNumbers() > 18.5 && this.resultNumbers() < 24) {
      console.log('Category: Normal');
      return ResultCategory.Normal;
    } else if (this.resultNumbers() >= 24 && this.resultNumbers() < 29) {
      console.log('Category: Overweight');
      return ResultCategory.Overweight;
    } else {
      console.log('Category: Obese');
      return ResultCategory.Obese;
    }
  }

  resultCategoryMan() {
    console.log('Result Number:', this.resultNumbers());

    if (this.resultNumbers() <= 18.5) {
      console.log('Category: Underweight');
      return ResultCategory.Underweight;
    } else if (this.resultNumbers() > 18.5 && this.resultNumbers() < 25) {
      console.log('Category: Normal');
      return ResultCategory.Normal;
    } else if (this.resultNumbers() >= 25 && this.resultNumbers() < 30) {
      console.log('Category: Overweight');
      return ResultCategory.Overweight;
    } else {
      console.log('Category: Obese');
      return ResultCategory.Obese;
    }
  }
}
