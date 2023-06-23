import { heroes } from "../data/heroes";

/**
 * Async: Permite crear funciones asíncronas.
 * Devuelve una promesa, por lo que se puede usar .then() y .catch().
 */

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {
  
  const id1 = '5d86371fd55e2e2a30fe1ccb';

  const renderHero = ( hero ) => {
    const { name, about } = hero;
    element.innerHTML = `
      <h3 style="color: green;">Nombre: ${ name }</h3>
      <p>${ about }</p>
    `;
  }
  
  findHero( id1 )
    .then( renderHero )
    .catch( renderHero );
  
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = async ( id ) => { // async: Indica que la función es asíncrona.
  const hero = heroes.find( hero => hero.id === id );

  return hero; // return: Devuelve una promesa.
}