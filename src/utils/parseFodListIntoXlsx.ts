import { Food, Units } from "../vocabulary";

export type IParserParams = {
  name: Food,
  unit: Units,
  calcValue: number,
};

export default (listArr: IParserParams[]): Object[] => {
  let result: any[] = [
    ['Найменування'], ['Вага'], ['од.'],
  ];
  return listArr.map(({ name, calcValue, unit }) => {
    return {
      [result[0]]: name,
      [result[1]]: calcValue,
      [result[2]]: unit,
    }
  });
};