import { Food, Units } from "../vocabulary"

export interface IDailyStandObj {
  [key: string]: IDailyStandListItem
}

export interface IDailyStandListItem {
  dailyValue: number,
  name: Food,
  unit: Units
}

export interface IDailyList extends IDailyStandListItem {
  calcValue: number
};


