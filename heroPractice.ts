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
