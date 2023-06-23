import { heroes } from "../data/heroes";

/**
 * Callbacks:
 * Los callbacks son funciones que se pasan como argumentos a otras funciones.
 * Sirven para ejecutar código de manera asíncrona.
 * La orden de ejecución de las funciones no es secuencial.
 */

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
  const id1 = '5d86371fd55e2e2a30fe1ccb1';
  const id2 = '5d86371fd55e2e2a30fe1ccb2';

  findHero( id1, ( error, hero1 ) => { 
    // element.innerHTML = hero?.name || 'No hay heroe'; // Si hero es undefined, se muestra 'No hay heroe'.
    if ( error ) { // Si existe el error, se muestra el error.
      element.innerHTML = error; // Si hero es undefined, se muestra 'No hay heroe'.
      return;
    }

    findHero( id2, (error, hero2 ) => {
      if ( error ) { // Si existe el error, se muestra el error.
        element.innerHTML = error; // Si hero es undefined, se muestra 'No hay heroe'.
        return;
      }

      element.innerHTML = `${hero1.name} / ${hero2.name}`; // Si hero es undefined, se muestra 'No hay heroe'.
      console.log({hero1: hero1 , hero2: hero2});
    });
    
  });
  
}

/**
 * 
 * @param {String} id 
 * @param { ( error: String | null , hero: Object) => void } callback 
 */
const findHero = ( id, callback ) => {
  const hero = heroes.find( hero => hero.id === id ); // Busca el héroe con el id indicado. Si no lo encuentra devuelve undefined.

  console.log({hero2: hero});

  if ( !hero ) { // Si no existe el héroe, se ejecuta el callback con el error.
    callback( `No existe un héroe con el id ${ id }` );
    return; // undefined
  }

  callback( null, hero );
  
}