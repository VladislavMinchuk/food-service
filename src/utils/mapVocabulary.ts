import { IVocabularyList } from "../vocabulary";

export interface IUpdatingObj {
  [key: string]: any
}

// Returned updated 'updatingObj' object with adding 'field' and 'neme' field from main vocabulary list
export default (vocabulary: IVocabularyList, updatingObj: IUpdatingObj) => {
  const listWithName = { ...updatingObj };
  
  Object.keys(vocabulary).forEach((field) => {
    if (listWithName[field]) {
      listWithName[field].name = vocabulary[field].name;
      listWithName[field].field = field;
    }
  });
  
  return listWithName;
};