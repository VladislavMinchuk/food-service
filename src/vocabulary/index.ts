export interface IVocabularyItem {
  name: string
}

export interface IVocabularyList {
  [key: string]: IVocabularyItem
};

export enum Units {
  kilo = 'кг.',
  gram = 'г.',
  pieces = 'шт.',
}

export enum Food {
  breadFirstGrade = 'Хліб із борошна пшеничного першого сорту',
  breadSecondGrade = 'Хліб із суміші борошна житнього обдирного і пшеничного першого сорту',
  bunFirstGradeWheatFlour = 'Булочка із борошна пшеничного першого сорту',
  firstGradeWheat = 'Борошно пшеничне першого сорту',
  yeast = 'Дріжджі хлібопекарські сухі або пресовані',
  secondGradeWheat = 'Борошно пшеничне другого сорту',
  // ==================================
  potato = 'Картопля',
  cabbage = 'Капуста',
  beetroot = 'Буряки',
  carrot = 'Морква',
  onion = 'Цибуля',
  cucumbers = 'Огірки, помідори, зелень',
  cereals = 'Крупи різні',
  pasta = 'Макаронні вироби',
  // =====================
  meat = 'М\'ясо',
  fish = 'Риба',
  // =====================
  oil = 'Олія',
  cheese = 'Сир сичужний твердий',
  butter = 'Масло',
  margarine = 'Жири тваринні топлені, маргарин',
  lard = 'Сало',
  // =====================
  tea = 'Чай',
  sugar = 'Цукор',
  jam = 'Мед натуральний або джем',
  // ====================
  eggs = 'Яйця курячі, штук (на тиждень)',
  // ====================
  salt = 'Сіль, сіль йодована',
  bayLeaf = 'Лавровий лист',
  pepper = 'Перець',
  mustard = 'Гірчичний порошок',
  vinegar = 'Оцет',
  tomatoPasro = 'Томат-паста',
  // ==================
  driedFruit = 'Сухофрукти',
  juices = 'соки фруктові (плодово-ягідні)',
  // ==================
  multivitamin = 'Полівітамінний препарат типу "Гексавіт", драже',
};

export const FoodBread = {
  breadFirstGrade: Food.breadFirstGrade,
  breadSecondGrade: Food.breadSecondGrade,
  secondGradeWheat: Food.secondGradeWheat,
}

export const FoodBun = {
  bunFirstGradeWheatFlour: Food.bunFirstGradeWheatFlour,
  firstGradeWheat: Food.firstGradeWheat,
  yeast: Food.yeast,
}

export const FoodVegetables = {
  potato: Food.potato,
  cabbage: Food.cabbage,
  beetroot: Food.beetroot,
  carrot: Food.carrot,
  onion: Food.onion,
  cucumbers: Food.cucumbers,
  cereals: Food.cereals,
  pasta: Food.pasta,
}

export const FoodMeat = {
  meat: Food.meat,
  fish: Food.fish,
}

export const FoodOli = {
  oil: Food.oil,
  cheese: Food.cheese,
  butter: Food.butter,
  margarine: Food.margarine,
  lard: Food.lard,
}

export const FoodEggs = {
  eggs: Food.eggs,
}

export const FoodTeaJam = {
  tea: Food.tea,
  sugar: Food.sugar,
  jam: Food.jam,
}

export const FoodSpices = {
  salt: Food.salt,
  bayLeaf: Food.bayLeaf,
  pepper: Food.pepper,
  mustard: Food.mustard,
  vinegar: Food.vinegar,
  tomatoPasro: Food.tomatoPasro,
}

export const FoodFuits = {
  driedFruit: Food.driedFruit,
  juices: Food.juices,
}

export const FoodMultivitamin = {
  multivitamin: Food.multivitamin,
}