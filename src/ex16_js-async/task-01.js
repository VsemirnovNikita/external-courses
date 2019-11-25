function myFetch(url,method="GET"){
    return new Promise((resolve, reject) => {
        let xhr= new XMLHttpRequest();
        xhr.open(method,url);
        xhr.send();
        if(xhr.status){
            resolve(xhr.responseText);
        }
    })
}  
