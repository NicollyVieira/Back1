async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            const response = await fetch(url);
            return response.status;
        })
    )
    return arrStatus;
}



function extraiLinks(arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}


export default async function listaValidada(listaDeLinks) {
    //return extraiLinks(listaDeLinks);
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    //console.log(status);
    return listaDeLinks.map((objeto,indice)=>({
        ...objeto,
        status:status[indice]

    }));
}

