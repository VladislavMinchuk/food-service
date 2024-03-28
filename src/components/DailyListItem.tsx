import { numberWithSpaces } from "../utils";

type DailyListItemProps = {
  name: string,
  unit: string,
  value: number,
  children?: React.ReactNode
};

const DailyListItem = ({ name, value, unit, children }: DailyListItemProps) => {
  const formatValue = numberWithSpaces(value || 0);
  return (
    <li>{formatValue} {unit} - {name} {children}</li>
  );
};

export default DailyListItem;