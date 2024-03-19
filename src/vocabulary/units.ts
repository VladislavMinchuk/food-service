import { IVocabularyItem } from ".";

export interface IVocabularyUnits {
  kilo: IVocabularyItem,
  gram: IVocabularyItem,
  pieces: IVocabularyItem,
};

const units: IVocabularyUnits = {
  kilo: {
    name: 'кг.'
  },
  gram: {
    name: 'г.'
  },
  pieces: {
    name: 'шт.'
  },
};

export default units;