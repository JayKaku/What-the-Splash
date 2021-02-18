const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page =>{
    const res = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    //console.log("I am here at api", res)
    const data = await res.json();
    //console.log(data)
    if(res.status >= 400){
        throw new Error(data.errors)
    }
    return data;
}

const fetchImagesStats = async id =>{
    const res = await fetch(`${URL}/${id}/statistics${KEY}`)
    const data = await res.json();
    if(res.status >= 400 ){
        throw new Error(data.errors)
    }
    return data;
}

export {fetchImages,fetchImagesStats};