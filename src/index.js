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
