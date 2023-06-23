import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async ( element ) => {
  const id = '5d86371f233c9f2425f16916';
  const heroIds = heroes.map( hero => hero.id ); 
  
  /**
   * for await
   * Sirve para iterar sobre un array de promesas y esperar a que se resuelvan
   */
    const heroPromises = getHeroesAsync( heroIds );
    for await ( const heroPromise of heroPromises ) {
      element.innerHTML += `
        <p style='color:green'><b>Hero: ${heroPromise.name}</b></p>
      `;
    }
  
  /**
   * if Await
   * Sirve para esperar a que una promesa se resuelva
   */
    // if ( await getHeroAsync( id ) ) { 
    //   element.innerHTML = 'Si existe el heroe'
    //   return;
    // }
    // element.innerHTML = 'No existe el heroe'
  
  // element.innerHTML = `
  //   <p style='color:green'><b>Hero: ${hero.name}</b></p>
  // `;

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async (id) => {

    await new Promise(( resolve ) => { // Simulate a delay
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id ); 
}