import { IDailyList } from "../interfaces";
import { round, kiloCalc } from ".";
import { Units } from "../vocabulary";
import { dailyStandList } from "../db/dailyStandart";

export default (dailyQuantity: number): IDailyList[] => (dailyStandList.map((item) => {
  const calcValue = dailyQuantity * item.dailyValue || 0;
  
  if (item.unit === Units.pieces) {
    return { ...item, calcValue: round(calcValue, 0) }
  }
  
  return { ...item, calcValue: round(kiloCalc(calcValue), 4) }
}))
