/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) => {
  console.log(import.meta.env);
  
  // import.meta.env es un objeto que contiene información sobre variables de entorno de ejecución actual.
  const html = `
    <h2>01 - Variables de entorno (Environments)</h2>

    Dev: ${import.meta.env.DEV}<br>
    Prod: ${import.meta.env.PROD}<br>
    KEY: ${import.meta.env.VITE_API_KEY}<br>
    URL: ${import.meta.env.VITE_BASE_URL}<br>
  `;

  element.innerHTML = html;
}