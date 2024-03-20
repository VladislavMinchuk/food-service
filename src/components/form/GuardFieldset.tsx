import { useEffect } from "react";
import { useForm } from "react-hook-form";

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
      <p>
        <label>
          Враховуючи варту
          <input type="checkbox" { ...register('isGuard') } />
        </label>
      </p>
      <label htmlFor="guard">Варта на день:</label>
      <div>
        <input type="number" min="0" defaultValue={defaultValue} disabled={!isGuard} { ...register('guardQuantity') } />
      </div>
    </fieldset>
  );
};

export default GuardFieldset;