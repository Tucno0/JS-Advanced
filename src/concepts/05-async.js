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
  
  const id1 = '5d86371fd55e2e2a30fe1ccbc';
  console.log('Inicio de componmente');

  const renderHero = ( name ) => {
    element.innerHTML = `
      <h3 style="color: green;">${ name }</h3>
    `;
  }
  
  findHero( id1 )
    .then( renderHero )
    .catch( renderHero );
  
  console.log('Fin de componente');
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = async ( id ) => { // async: Indica que la función es asíncrona.
  const hero = heroes.find( hero => hero.id === id );

  if ( !hero ) throw `Hero with id ${ id } not found`;

  return hero.name; // return: Devuelve una promesa.
}