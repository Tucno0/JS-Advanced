import { heroes } from "../data/heroes";

/**
 *! Promesas
 * 
 * Las promesas son objetos que nos ayudan a manejar el asincronismo
 * Reciben un callback con dos argumentos, resolve y reject.
 * Resolve se ejecuta cuando la promesa se resuelve correctamente, y reject cuando ocurre un error.
 * 
 *? Las promesas tienen tres estados:
 * - Pending: No se ha resuelto ni rechazado.
 * - Fulfilled: Se resolvió correctamente.
 * - Rejected: Ocurrió un error.
 * 
 *? Las promesas tienen dos métodos para manejar el resultado:
 * - then: Se ejecuta cuando la promesa se resuelve correctamente.
 * - catch: Se ejecuta cuando la promesa es rechazada.
 * - finally: Se ejecuta siempre, tanto si la promesa se resuelve como si es rechazada.
 * 
 * Las promesas son creadas con el constructor Promise.
 * El constructor Promise recibe un callback con dos argumentos, resolve y reject.
 * El callback se ejecuta inmediatamente.
 */

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
  
  const renderHero = ( hero ) => {
    element.innerHTML = `
      <h3 style="color: green;">${ hero.name }</h3>
    `;
  }

  const renderTwoHeros = ( hero1, hero2 ) => {
    element.innerHTML = `
      <h3 style="color: green;">${ hero1.name }</h3>
      <h3 style="color: green;">${ hero2.name }</h3>
    `;
  }

  const renderError = ( error ) => {
    element.innerHTML = `
      <h3 style="color: red;">${ error }</h3>
    `;
  }

  const id1 = '5d86371fd55e2e2a30fe1cc3';
  const id2 = '5d86371fd55e2e2a30fe1ccb2';

  // findHero( id1 )
  //   .then( superHero => renderHero( superHero ) ) // superHero es el valor que devuelve la promesa, en este caso el hero.
  //   .catch( error => renderError( error )); // error es el valor que devuelve la promesa, cuando es rechazada.

  // findHero( id1 ) //* Forma simplificada de la línea anterior.
  //   .then( renderHero ) // En este caso el valor que devuelve la promesa se pasa como argumento a la función renderHero.
  //   .catch( renderError ); // Si la promesa es rechazada, se ejecuta el callback del método catch.


  /**
   * !===================================================================================================
   * !Forma 1
   * !Promise hell
   * !romise hell es cuando se anidan muchas promesas.
   */
      // findHero( id1 )
      //   .then((hero1) => {

      //     findHero( id2 )
      //       .then(( hero2 ) => {
      //         renderTwoHeros( hero1, hero2 );
      //       }).catch((err) => {
      //         renderError( err );
      //       });

      //   })

      //   .catch((err) => {
      //     renderError( err );
      //   });

   // !===================================================================================================

  /**
   * ?===================================================================================================
   * ?Forma 2
   * ?Promise hell refactorizado
  */
      // let hero1;

      // findHero( id1 )
      //   .then( hero  => {
      //     hero1 = hero;
      //     return findHero( id2 );
      //   })
      //   .then( hero2 => {
      //     renderTwoHeros( hero1, hero2 );
      //   })
      //   .catch( renderError ); // Este catch atrapa los errores de las dos promesas.

   // ?===================================================================================================

  /**
   * *===================================================================================================
   * *Forma 3
   * *Promise.all
   * *Promise.all recibe un arreglo de promesas y devuelve una promesa que se resuelve cuando todas las promesas del arreglo se resuelven.
   * *Sirve para ejecutar varias promesas al mismo tiempo. Siempre y cuando no dependan una de la otra, osea que no se necesite el resultado de una para ejecutar la otra.
   * *Regresa un arreglo con los valores de las promesas.
   */
      Promise.all([ findHero( id1 ), findHero( id2 ) ])
        // .then( (arregloDeValores ) => {}) // arregloDeValores es un arreglo con los valores de las promesas.
        .then( ([ hero1, hero2 ] ) => renderTwoHeros(hero1, hero2)) // Se puede desestructurar el arreglo.
        .catch( renderError ); // Este catch atrapa los errores de las dos promesas.


  // *===================================================================================================

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
  return new Promise( ( resolve, reject) => {
    const hero = heroes.find( hero => hero.id === id );

    if ( hero ) {
      resolve( hero ); // Se resuelve la promesa, solo se puede resolver una vez. Este resolve devuelve el valor de la promesa, osea el hero.
      return;
    };

    reject(`No existe un héroe con el id ${ id }`); // Se rechaza la promesa, solo se puede rechazar una vez.
  });
}