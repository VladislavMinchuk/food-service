type DailyListItemProps = {
  name: string,
  unit: string,
  value: number,
  children?: React.ReactNode
};

const DailyListItem = ({ name, value, unit, children }: DailyListItemProps) => {
  return (
    <li>{value || 0} {unit} - {name} {children}</li>
  );
};

export default DailyListItem;