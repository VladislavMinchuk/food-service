import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Checkbox, Input } from '@chakra-ui/react'

type Inputs = {
  guardQuantity: string,
  isGuard: boolean
};

export type GuardFieldsetHandlerParams = {
  inputValue: string,
  checkValue: boolean
};

type GuardFieldsetProps = {
  defaultValue?: string,
  onChangeHandler?: (obj: GuardFieldsetHandlerParams) => void;
};

const GuardFieldset = ({ defaultValue = '456', onChangeHandler }: GuardFieldsetProps) => {
  const {
    register,
    watch,
  } = useForm<Inputs>({ mode: 'onBlur', defaultValues: {guardQuantity: defaultValue} });
  
  const isGuard = watch('isGuard');
  const guardQuantity = watch('guardQuantity');
  
  useEffect(() => {
    if (onChangeHandler) onChangeHandler({ inputValue: guardQuantity, checkValue: isGuard });
  }, [guardQuantity, isGuard])
  
  return (
    <fieldset>
      <Checkbox { ...register('isGuard') }>
        Враховуючи варту
      </Checkbox>
      <p><label htmlFor="guard">Варта на день: </label></p>
      <Input
        id="guard"
        type="number"
        borderColor={'blue.500'}
        defaultValue={defaultValue}
        placeholder="Варта на день"
        min="0"
        disabled={!isGuard}
        { ...register('guardQuantity') }
      />
    </fieldset>
  );
};

export default GuardFieldset;