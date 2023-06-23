/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {
  element.innerHTML = 'Loading...'
  
  const renderValue = ( value ) => {
    element.innerHTML = `
      <h3 style="color: green;">${ value }</h3>
    `;
  }

  Promise.race([ slowPromise, mediumromise, fastPromise ]) // La promesa que se resuelva primero, es la que se ejecuta.
    .then( renderValue )
    .catch( console.warn );
  
}

const slowPromise = new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve('Slow promise');
  }, 2000);
});
const mediumromise = new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve('Medium promise');
  }, 1500);
});
const fastPromise = new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve('Fast promise');
  }, 1000);
});