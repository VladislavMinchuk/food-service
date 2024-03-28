import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Button,
  Input,
  Heading
} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { IDailyList } from "../interfaces";
import { round, parseFodListIntoXlsx, calcDailyStandart, calcDailyGuard } from "../utils";
import MainGroupsHolder from "../components/dailyGroups/MainGroupsHolder";
import XLSXDownload from "../components/XLSXDownload";
import GuardFieldset, { GuardFieldsetHandlerParams } from "../components/form/GuardFieldset";

type Inputs = {
  dailyQuantity: string,
  guardQuantity: string,
  isGuard: boolean
};

const DailyStandartPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<Inputs>({ mode: 'onBlur', defaultValues: {guardQuantity: '456'} });
  
  const isGuard = watch('isGuard');
  const dailyQuantityInput = parseInt(watch('dailyQuantity'));
  const guardQuantityInput = parseInt(watch('guardQuantity'));
  
  const [dailyList, setDailyList] = useState<IDailyList[]>([]);
  
  const onSubmit: SubmitHandler<Inputs> = () => {
    calculateByQuantity();
  }
  
  const calcSumFood = (standartList: IDailyList[], guardList: IDailyList[]): IDailyList[] => {
    return standartList.map((item) => {
      const sameItem = guardList.find(({ name }) => name === item.name);
      if (sameItem) item.calcValue = round(item.calcValue + sameItem.calcValue, 4);
      return item;
    });
  };
  
  const calculateByQuantity = (): void => {
    const daily = calcDailyStandart(dailyQuantityInput);
    // If no guard should return calculated daily list only
    if (!isGuard) return setDailyList(daily);
    
    setDailyList(calcSumFood(daily, calcDailyGuard(guardQuantityInput)));
  };
  
  const guardHandler = ({inputValue, checkValue}: GuardFieldsetHandlerParams) => {
    setValue('guardQuantity', inputValue);
    setValue('isGuard', checkValue);
  };
  
  useEffect(() => {
    calculateByQuantity();
  }, [dailyQuantityInput, guardQuantityInput, isGuard]);
  
  return (
    <Box p={4}>
      <Heading as="h1" mb="2" size="lg">Розрахунок норми № 1 - загальновійськової</Heading>
      <Box mb={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
            <FormLabel>Кількість добовидач</FormLabel>
            <Flex>
              <Input borderRightRadius={0} borderColor={'blue.500'} type="number" placeholder="Кількість добовидач" min="0" { ...register('dailyQuantity') } />
              <Button colorScheme='blue' borderLeftRadius={0} type="submit">Submit</Button>
            </Flex>
          </FormControl>
          <br />
          <GuardFieldset onChangeHandler={guardHandler} />
        </form>
      </Box>
      <Box mb={4}>
        <MainGroupsHolder list={dailyList} />
      </Box>
      <XLSXDownload data={parseFodListIntoXlsx(dailyList)} titel="Скачати .xlsx" />
    </Box>
  );
};

export default DailyStandartPage;