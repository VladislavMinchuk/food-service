import { IDailyStandListItem } from "../interfaces";
import { Food, Units } from "../vocabulary";


export const dailyStandList: IDailyStandListItem[] = [
  {
    name: Food.breadFirstGrade,
    dailyValue: 350,
    unit: Units.kilo
  },
  {
    name: Food.breadSecondGrade,
    dailyValue: 300,
    unit: Units.kilo
  },
  {
    name: Food.bunFirstGradeWheatFlour,
    dailyValue: 70,
    unit: Units.kilo
  },
  {
    name: Food.firstGradeWheat,
    dailyValue: 50,
    unit: Units.kilo
  },
  {
    name: Food.yeast,
    dailyValue: 0.5,
    unit: Units.kilo
  },
  {
    name: Food.secondGradeWheat,
    dailyValue: 15,
    unit: Units.kilo
  },
  {
    name: Food.cereals,
    dailyValue: 120,
    unit: Units.kilo
  },
  {
    name: Food.pasta,
    dailyValue: 40,
    unit: Units.kilo
  },
  {
    name: Food.meat,
    dailyValue: 250,
    unit: Units.kilo
  },
  {
    name: Food.fish,
    dailyValue: 150,
    unit: Units.kilo
  },
  {
    name: Food.lard,
    dailyValue: 20,
    unit: Units.kilo
  },
  {
    name: Food.jam,
    dailyValue: 20,
    unit: Units.kilo
  },
  {
    name: Food.margarine,
    dailyValue: 15,
    unit: Units.kilo
  },
  {
    name: Food.oil,
    dailyValue: 25,
    unit: Units.kilo
  },
  {
    name: Food.cheese,
    dailyValue: 20,
    unit: Units.kilo
  },
  {
    name: Food.butter,
    dailyValue: 30,
    unit: Units.kilo
  },
  {
    name: Food.eggs,
    dailyValue: 0.28, // штук
    unit: Units.pieces
  },
  {
    name: Food.sugar,
    dailyValue: 70,
    unit: Units.kilo
  },
  {
    name: Food.salt,
    dailyValue: 25,
    unit: Units.kilo
  },
  {
    name: Food.tea,
    dailyValue: 1.2,
    unit: Units.kilo
  },
  {
    name: Food.bayLeaf,
    dailyValue: 0.2,
    unit: Units.kilo
  },
  {
    name: Food.pepper,
    dailyValue: 0.3,
    unit: Units.kilo
  },
  {
    name: Food.mustard,
    dailyValue: 0.3,
    unit: Units.kilo
  },
  {
    name: Food.vinegar,
    dailyValue: 1,
    unit: Units.kilo
  },
  {
    name: Food.tomatoPasro,
    dailyValue: 6,
    unit: Units.kilo
  },
  {
    name: Food.potato,
    dailyValue: 600,
    unit: Units.kilo
  },
  {
    name: Food.cabbage,
    dailyValue: 130,
    unit: Units.kilo
  },
  {
    name: Food.beetroot,
    dailyValue: 30,
    unit: Units.kilo
  },
  {
    name: Food.carrot,
    dailyValue: 50,
    unit: Units.kilo
  },
  {
    name: Food.onion,
    dailyValue: 50,
    unit: Units.kilo
  },
  {
    name: Food.cucumbers,
    dailyValue: 40,
    unit: Units.kilo
  },
  {
    name: Food.driedFruit,
    dailyValue: 20,
    unit: Units.kilo
  },
  {
    name: Food.juices,
    dailyValue: 100,
    unit: Units.kilo
  },
  {
    name: Food.multivitamin,
    dailyValue: 1,
    unit: Units.kilo
  },
];

// Guard standart
export const dailyGuardList: IDailyStandListItem[] = [
  {
    name: Food.breadFirstGrade,
    dailyValue: 100,
    unit: Units.kilo
  },
  {
    name: Food.breadSecondGrade,
    dailyValue: 50,
    unit: Units.kilo
  },
  {
    name: Food.cereals,
    dailyValue: 70,
    unit: Units.kilo
  },
  {
    name: Food.meat,
    dailyValue: 50,
    unit: Units.kilo
  },
  {
    name: Food.margarine,
    dailyValue: 5,
    unit: Units.kilo
  },
  {
    name: Food.butter,
    dailyValue: 15,
    unit: Units.kilo
  },
  {
    name: Food.sugar,
    dailyValue: 20,
    unit: Units.kilo
  },
  {
    name: Food.tea,
    dailyValue: 1,
    unit: Units.kilo
  },
  {
    name: Food.carrot,
    dailyValue: 5,
    unit: Units.kilo
  },
  {
    name: Food.onion,
    dailyValue: 5,
    unit: Units.kilo
  },
];

// const dailyStandListWithNaming: IDailyStandObj = addUnitsToFood(mapVocabulary(vocabulary, dailyStandList));

// export default dailyStandList;
