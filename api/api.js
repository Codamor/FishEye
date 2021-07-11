//function to get data from JSON
function getData(){
    return fetch("db/FishEye.json")
        .then(response => {
            if (!response){
                throw new Error("HTML error" + response.status) ;
            } else {
                return response.json() ;
            }
        })
        .then(data => {
           return data
        })
}

let db = getData()
