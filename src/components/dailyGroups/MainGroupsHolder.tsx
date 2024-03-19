import { IDailyList } from "../../interfaces";
import { FoodBread, FoodBun, FoodEggs, FoodFuits, FoodMeat, FoodMultivitamin, FoodOli, FoodSpices, FoodTeaJam, FoodVegetables } from "../../vocabulary";
import DailyListItem from "../DailyListItem";
import BunFlourGroup from "./BunFlourGroup";
import GroupComponent from "./GroupComponent";

export type GroupHolerProps = {
  list: IDailyList[],
};

const getGroupByEnums = (list: IDailyList[], objectEnums: any): IDailyList[] =>  {
  const enumsArr = Object.values(objectEnums);
  return list.filter(({name}) => enumsArr.includes(name));
};

export default ({ list }: GroupHolerProps) => {
  const breadGroup: IDailyList[] = getGroupByEnums(list, FoodBread);
  const bunFlourGroup: IDailyList[] = getGroupByEnums(list, FoodBun);
  const vegetablesGroup: IDailyList[] = getGroupByEnums(list, FoodVegetables);
  const meatGroup: IDailyList[] = getGroupByEnums(list, FoodMeat);
  const oilGroup: IDailyList[] = getGroupByEnums(list, FoodOli);
  const eggsGroup: IDailyList[] = getGroupByEnums(list, FoodEggs);
  const teaJamGroup: IDailyList[] = getGroupByEnums(list, FoodTeaJam);
  const spicesGroup: IDailyList[] = getGroupByEnums(list, FoodSpices);
  const multivitaminGroup: IDailyList[] = getGroupByEnums(list, FoodMultivitamin);
  const juice = getGroupByEnums(list, { name: FoodFuits.juices })[0];
  const driedFruits = getGroupByEnums(list, { name: FoodFuits.driedFruit })[0];
  
  return (
    <section>
      <GroupComponent list={breadGroup} />
      {<BunFlourGroup list={bunFlourGroup}/>}
      <ul className="inner-list">
        {vegetablesGroup.map(({ name, calcValue, unit }, idx) => {
            return <DailyListItem key={idx} value={calcValue} name={name} unit={unit}/>
          })}
      </ul>
      <GroupComponent list={meatGroup} />
      <GroupComponent list={oilGroup} />
      <GroupComponent list={eggsGroup} />
      <GroupComponent list={teaJamGroup} />
      <GroupComponent list={spicesGroup} />
      <ul className="inner-list">
        {juice && <DailyListItem value={juice.calcValue} name={juice.name} unit={juice.unit}>
          <p><strong>АБО</strong></p>
          </DailyListItem>}
        {driedFruits && <DailyListItem value={driedFruits.calcValue} name={driedFruits.name} unit={driedFruits.unit}/>}
      </ul>
      <GroupComponent list={multivitaminGroup} />
    </section>
  );
};
