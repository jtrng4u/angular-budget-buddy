export interface Expense {
  amount: number;
  description: string;
  category: CategoryEnum
}


export enum CategoryEnum {
  Entertainment = "Entertainment",
  Education = "Education",
  Travel = "Travel",
  Health = "Health",
  Food = "Food"
}
