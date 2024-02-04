// Aserción de tipos

const canvas = document.querySelector("canvas") as HTMLCanvasElement;

const context = canvas?.getContext("2d");

// Aunque sirve esta manera, lo ideal es hacerlo de la siguiente forma:
const newCanvas = document.querySelector("canvas");
if (newCanvas instanceof HTMLCanvasElement) {
  // Mediante la inferencia automaticamente Typescript detecta que es un HTMLCanvasElement
  const newContext = newCanvas?.getContext("2d");
}
