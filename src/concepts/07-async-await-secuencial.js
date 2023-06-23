/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitSecuencialComponent = async ( element ) => {

  console.time('Start');

  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  const [value1, value2, value3] = await Promise.all([ slowPromise(), mediumPromise(), fastPromise() ])

  element.innerHTML = `
    <p>Value1: ${value1}</p>
    <p>Value2: ${value2}</p>
    <p>Value3: ${value3}</p>
  `;

  console.timeEnd('Start');

}

const slowPromise = () => new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve('Slow promise');
  }, 2000);
});

const mediumPromise = () => new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve('Medium promise');
  }, 1500);
});

const fastPromise = () => new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve('Fast promise');
  }, 1000);
});