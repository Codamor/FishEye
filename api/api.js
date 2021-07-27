class fisheyeApi {

    getData(url) {
        return fetch(url)
            .then(response => {
                if (!response) {
                    throw new Error("HTML error" + response.status);
                } else {
                    return response.json();
                }
            })
            .catch(error => {
                console.log("Error getting data from Json file") ;
            })

    }

}


