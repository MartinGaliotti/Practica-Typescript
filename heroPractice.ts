type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  power: string;
  isActive?: boolean;
};

const createHero = (hero: Hero): Hero => {
  const { name, age, power } = hero;
  return { id: crypto.randomUUID(), name, age, power, isActive: true };
};

const newHero = createHero({ name: "Batman", age: 20, power: "Money" });
