/**
 * Funciones generadoras
 * Las funciones generadoras son funciones que pueden ser pausadas y reanudadas en cualquier momento, devolviendo un valor múltiples veces.
 * Sirven para crear iteradores personalizados y así poder recorrerlos con un for of o un for await of
 */

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsFunctionsComponent = ( element ) => {
  
  // const myGenerator = myFirstGeneratorFunction();
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());

  const genId = idGenerator();

  const button = document.createElement('button');
  button.innerText = 'Click me!';
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click: ${value}`;
  }

  button.addEventListener('click', renderButton); // La forma completa seria: button.addEventListener('click', () => renderButton());

}

// Teoria
function* myFirstGeneratorFunction() {
  yield 'Primer valor';
  yield 'Segundo valor';
  yield 'Tercer valor';
  yield 'Cuarto valor';
  
  return 'Ya no hay más valores';
}

// Ejemplo
function* idGenerator() {
  let currentId = 0;

  while (true) {
    yield ++currentId;
  }
}