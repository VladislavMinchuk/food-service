import { useEffect } from "react";
import DailyListItem from "../DailyListItem";
import { IDailyList, IDailyStandListItem } from "../../interfaces";
import bunFlourNames from "../../vocabulary/bunFlourFields";
import { Food } from "../../vocabulary";


type BunFlourGroupProps = {
  list: IDailyList[]
};


const BunFlourGroup = ({ list }: BunFlourGroupProps) => {
  const getBunOnly: IDailyList | undefined = list.find(({name}) => name === Food.bunFirstGradeWheatFlour);
  const firstGradeWheat: IDailyList | undefined = list.find(({name}) => name === Food.firstGradeWheat);
  const yeast: IDailyList | undefined = list.find(({name}) => name === Food.yeast);
  
  useEffect(() => {
  }, [])
  
  return (
    <div>
      <ul className="inner-list">
        {getBunOnly && <DailyListItem {...getBunOnly} value={getBunOnly?.calcValue}>
        <p><strong>АБО</strong></p>
        </DailyListItem>}
        {firstGradeWheat && <DailyListItem
          name={firstGradeWheat?.name}
          value={firstGradeWheat?.calcValue}
          unit={firstGradeWheat?.unit}
          />
        }
        {yeast && <DailyListItem
          name={yeast?.name}
          value={yeast?.calcValue}
          unit={yeast?.unit}
          />
        }
      </ul>
    </div>
  );
};

export default BunFlourGroup;