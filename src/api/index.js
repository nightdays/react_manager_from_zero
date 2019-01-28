
const BASE = "http://www.nightdays.net/test/"

const request = (url , method)=>{

    return function(data) {

        let options = {
            method : method,
            body : JSON.stringify(data),
            headers : new Headers({
                'Content-Type' : 'application/json'
            })
        }

        return fetch(BASE + url ,options);
    }
}


const api = {
    userList : request('standard/queryA' , 'post')
}

export default api;