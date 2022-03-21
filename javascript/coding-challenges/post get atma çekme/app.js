class Request {

    get(url){

        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => reject(err))
        })
    }

    post(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => reject("Album gönderilemedi"))
            
        })
    }
    put(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              .then(response => response.json())
            .then(response => resolve(response))
            .catch(err => reject(err))
        })
    }

}

const request = new Request();

request.put("https://jsonplaceholder.typicode.com/albums/41", {userId: 1010, title:"Ankara"}).then(album=>console.log(album)).catch(err=>console.log(err))

// request.post("https://jsonplaceholder.typicode.com/albums", {userId: 12, title: "Tarkan Karma"}).then(album=>console.log(album)).catch(err=>console.log(err))

request.get("https://jsonplaceholder.typicode.com/albums").then(albums=> console.log(albums));