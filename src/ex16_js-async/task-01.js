function myFetch(url,parametr){
    return new Promise((resolve, reject) => {
        let xhr= new XMLHttpRequest();
        xhr.open(parametr.method,url);
        xhr.send();
        if(xhr.status){
            resolve(JSON.parse(xhr.responseText)); 
        }
        xhr.ontimeout = function(){
            reject("failed");
        }
    })
}  

// fetch polifill 