/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseurl = 'https://platzi-avo.vercel.app';
/* Para usar fetch, se debe de hacer lo siguiente */
/* Conectarse al server
Procesar la respuesta
Convertirlo a JSON 
JSON -> Data -> Renderizar en DOM*/
/* Conectarse al server */
// window
//     .fetch(url)
//     .then((ans) => ans.json())
//     .then((allData) =>
//         allData.data.forEach((element) => {
//             console.log(element.name);
//         })
//     );

// const callApi = async () => {
//     const response = await fetch(`${baseurl}/api/avo`);
//     const test = await response.json();
//     const formatPrice = (price) => {
//         const newPrice = new window.Intl.NumberFormat('en-EN', {
//             style: 'currency',
//             currency: 'USD',
//         }).format(price);
//         return newPrice;
//     };
//     const allItems = [];
//     test.data.forEach((element) => {
//         /* Image */
//         const image = document.createElement('img'); /* Crea el elemento */
//         image.src = `${baseurl}${element.image}`;
//         image.className =
//             'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6';

//         // document.body.appendChild(image); /* Lo añade a body */
//         /* Title */
//         const title = document.createElement('h2');
//         title.textContent = element.name;
// title.style = 'font-size: 2rem'; /* Aplicando los estilos manualmente */
// title.style.fontSize = '3rem'; /* Aplicando estilos especificando el estilo */
// title.className = 'muy-grande';
//         title.className = 'text-lg';

//         // document.body.appendChild(title);
//         /* Price */
//         const price = document.createElement('div');
//         price.className = 'text-gray-600';
//         price.textContent = formatPrice(element.price);
//         // document.body.appendChild(price);

//         const container = document.createElement('div');
//         /* Se agregan los 3 al tiempo con append */
//         container.append(image, title, price);
//         allItems.push(container);
//         // document.body.appendChild(container); /* Esto implicaria modificar el DOM muchas veces, una por cada elemento del array */
//     });
//     const app = document.querySelector('#app');
//     app.append(...allItems);
// };
// callApi();

/* Existe la API intl para dar formato a fechas y monedas */
const epicUrl = 'https://free-epic-games.p.rapidapi.com/free';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bdcfc6c8bfmsh72e05c5c4aea2d7p143be8jsn82017204f123',
        'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com',
    },
};
const callApiPersonal = async () => {
    const response = await fetch(epicUrl, options);
    const data = await response.json();
    const allData = [];
    const app = document.querySelector('#app');
    console.log(data.freeGames);
    data.freeGames.current.forEach((item) => {
        /* Imagen */
        const image = document.createElement('img');
        image.src = item.keyImages[1].url;
        /* Título */
        const title = document.createElement('h3');
        title.className = 'titleGame';
        title.textContent = item.title;
        /* Descripción */
        const desc = document.createElement('p');
        const descModified = item.description.split(' ');
        descModified.splice(40, descModified.length);
        desc.textContent = `Description: ${descModified.join(' ')}...`;
        /* Contenedor */
        const container = document.createElement('div');
        container.className = 'contGame';
        container.style.background = item.keyImages[1].url;
        container.append(image, title, desc);
        allData.push(container);
        console.log(allData);
    });

    app.append(...allData);
};
callApiPersonal();
