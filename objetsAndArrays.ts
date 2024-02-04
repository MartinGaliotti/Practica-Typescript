// Objetos
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerSacale = "low" | "medium" | "high";

type HeroBasic = {
  name: string;
  age: number;
  power: HeroPowerSacale;
};

type HeroAdditionalInfo = {
  readonly id?: HeroId;
  isActive?: boolean;
};

type Hero = HeroBasic & HeroAdditionalInfo;

const createHero = (hero: HeroBasic): Hero => {
  const { name, age, power } = hero;
  return { id: crypto.randomUUID(), name, age, power, isActive: true };
};

const newHero = createHero({ name: "Batman", age: 20, power: "low" });

// Obtener tipos de una variable
const example = {
  name: "string",
  age: "number",
  power: "string",
};

type Example = typeof example;

// Arrays
const heroes: Hero[] = [];

heroes.push(newHero);

const numbersOrStrings: (number | string)[] = [];
numbersOrStrings.push(1);
numbersOrStrings.push("1");

// Example TicTacToe
type Cell = "X" | "O" | "";

type GameBoard = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

const board: GameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Interfaces

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductOpps {
  add: (product: Product) => void;
  remove: (id: string) => void;
  clear: () => void;
}

interface ProductCart {
  products: Product[];
  totalPrice: number;
}

const productCart: ProductCart = {
  totalPrice: 1000,
  products: [
    {
      id: crypto.randomUUID(),
      name: "random",
      price: 100,
      quantity: 10,
    },
  ],
};

// Extender interface
interface SpecificProduct extends Product {
  specificProperty: string;
}

const specificProduct: SpecificProduct = {
  id: crypto.randomUUID(),
  name: "random",
  price: 100,
  quantity: 10,
  specificProperty: "random",
};
