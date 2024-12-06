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
  Underweight = 'You are in category: Underweight',
  Normal = 'You are in category: Normal weight',
  Overweight = 'You are in category: Overweight',
  Obese = 'You are in category: Obese',
}
