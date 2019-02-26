
const BASE = "http://www.nightdays.net/special/"

const request = (url , method)=>{

    return function(data) {

        let options = {
            method : method,
            body : JSON.stringify(data),
            headers : new Headers({
                'Content-Type' : 'application/json'
            })
        }

        return fetch(BASE + url ,options).then(function(response){return response.json()});
    }
}


const api = {
    specialList : request('list', "post")
}

export default api;