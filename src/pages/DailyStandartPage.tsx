import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { dailyStandList, dailyGuardList } from "../db/dailyStandart";
import { IDailyList, IDailyStandListItem } from "../interfaces";
import { kiloCalc, round } from "../utils";
import { Units } from "../vocabulary";
import MainGroupsHolder from "../components/dailyGroups/MainGroupsHolder";
import XLSXDownload from "../components/XLSXDownload";
import parseFodListIntoXlsx from "../utils/parseFodListIntoXlsx";
import GuardFieldset, { GuardFieldsetHandlerParams } from "../components/form/GuardFieldset";

type Inputs = {
  dailyQuantity: string,
  guardQuantity: string,
  isGuard: boolean
};

// TODO: create custom hool for daily calclulation

const DailyStandartPage = () => {
  const [dailyList, setDailyList] = useState<IDailyList[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<Inputs>({ mode: 'onBlur', defaultValues: {guardQuantity: '456'} });
  
  const dailyQuantityInput = watch('dailyQuantity');
  const isGuard = watch('isGuard');
  const guardQuantityInput = watch('guardQuantity');
  
  const onSubmit: SubmitHandler<Inputs> = () => {
    calculateByQuantityStr();
  }
  
  const calcDailyExpanse = (quantity: number, standartList: IDailyStandListItem[]): IDailyList[] => {
    return standartList.map((item) => {
      const calcValue = quantity * item.dailyValue || 0;
      
      if (item.unit === Units.pieces) {
        return { ...item, calcValue: round(calcValue, 4) }
      }
      
      return { ...item, calcValue: round(kiloCalc(calcValue), 4) }
    });
  };
  
  const calcSumFood = (standartList: IDailyList[], guardList: IDailyList[]): IDailyList[] => {
    return standartList.map((item) => {
      const sameItem = guardList.find(({ name }) => name === item.name);
      if (sameItem) item.calcValue = round(item.calcValue + sameItem.calcValue, 4);
      return item;
    });
  };
  
  const calculateByQuantityStr = (): void => {
    const calculatedList = calcDailyExpanse(parseInt(dailyQuantityInput || ''), dailyStandList);
    // If no guard should return calculated daily list only
    if (!isGuard) return setDailyList(calculatedList);
    
    const calculatedGuardList = calcDailyExpanse(parseInt(guardQuantityInput || ''), dailyGuardList);
    setDailyList(calcSumFood(calculatedList, calculatedGuardList));
  };
  
  const guardHandler = ({inputValue, checkValue}: GuardFieldsetHandlerParams) => {
    setValue('guardQuantity', inputValue);
    setValue('isGuard', checkValue);
    calculateByQuantityStr();
  };
  
  useEffect(() => {
    calculateByQuantityStr();
  }, [dailyQuantityInput, guardQuantityInput, isGuard]);
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <p>Розрахунок норми № 1 - загальновійськової</p>
          <input type="number" min="0" { ...register('dailyQuantity') } />
          <button type="submit">Submit</button>
        </fieldset>
        <br />
        <GuardFieldset onChangeHandler={guardHandler} />
      </form>
      <MainGroupsHolder list={dailyList} />
      <XLSXDownload data={parseFodListIntoXlsx(dailyList)} titel="Скачати .xlsx" />
    </div>
  );
};

export default DailyStandartPage;