export interface Calculator {
  id: string;
  weight: number;
  height: number;
  resultnumber: number;
  resultcaregorywoman: string;
  resultcategoryman: string;
}

export enum ErrorMessage {
  None = '',
  MissingFields = 'Fields are required',
  OnlyNumber = 'Only number type required',
}

export enum ResultCategory {
  None = '',
  Underweight = 'Category: Underweight',
  Normal = 'Category: Normal weight',
  Overweight = 'Category: Overweight',
  Obese = 'Category: Obese',
}
