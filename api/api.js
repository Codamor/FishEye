//To get data from JSON
function getData(url){
    return fetch(url)
        .then(response => {
            if (!response){
                throw new Error("HTML error" + response.status) ;
            } else {
                return response.json() ;
            }
        })
}

async function fetchData(){
    const response = await fetch("db/FishEye.json") ;
    const data = await response.json();
    return data ;
}



