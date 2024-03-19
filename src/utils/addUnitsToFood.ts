import units from "../vocabulary/units";

export interface IUpdatingObj {
  [key: string]: any
}

// Returned updated 'updatingObj' object with adding 'unit' field from 'units' vocabulary list
export default (updatingObj: IUpdatingObj) => {
  const newObj = { ...updatingObj };
  
  Object.keys(newObj).forEach((field) => {
    if (['eggs'].includes(field)) {
      newObj[field].unit = units.pieces.name;
    }
    else newObj[field].unit = units.kilo.name;
  });
  
  return newObj;
};