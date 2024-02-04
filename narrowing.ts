const mostrarLongitud = (object: number | string) => {
  if (typeof object === "string") {
    console.log(object.length);
  }
};

mostrarLongitud("Hola");

//

interface Mario {
  company: "Nintendo";
  name: string;
  jump: () => void;
}

interface Sonic {
  company: "Sega";
  name: string;
  run: () => void;
}

type Character = Mario | Sonic;

// Type Guard
function checkIsSonic(character: Character): character is Sonic {
  return (character as Sonic).run !== undefined;
}

function jugar(character: Character) {
  console.log(character.name);
  if (checkIsSonic(character)) {
    character.run();
  } else {
    character.jump;
  }
}
