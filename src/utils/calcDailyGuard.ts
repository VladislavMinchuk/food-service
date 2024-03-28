import { IDailyList } from "../interfaces";
import { round, kiloCalc } from ".";
import { Units } from "../vocabulary";
import { dailyGuardList } from "../db/dailyStandart";

export default (dailyQuantity: number): IDailyList[] => (dailyGuardList.map((item) => {
  const calcValue = dailyQuantity * item.dailyValue || 0;
  
  if (item.unit === Units.pieces) {
    return { ...item, calcValue: round(calcValue, 4) }
  }
  
  return { ...item, calcValue: round(kiloCalc(calcValue), 4) }
}))
