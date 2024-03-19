import { IDailyList } from "../../interfaces";
import DailyListItem from "../DailyListItem";

type GroupComponentProps = {
  list: IDailyList[]
}

const GroupComponent = ({ list }: GroupComponentProps) => {
  return (
    <ul className="inner-list">
      {list.map(({ name, calcValue, unit }, idx) => {
          return <DailyListItem key={idx} value={calcValue} name={name} unit={unit}/>
        })}
    </ul>
  );
};

export default GroupComponent;