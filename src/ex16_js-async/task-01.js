function myFetch(url,parametr){
    return new Promise((resolve, reject) => {
        let ok = true;
        let xhr = new XMLHttpRequest();
        xhr.open(parametr.method,url);
        xhr.send();
        if(xhr.status>206){
            ok=false;
            reject("error");
        }
        if(ok){
            resolve(JSON.parse(xhr.responseText)); 
        }
        xhr.ontimeout = function(){
            reject("failed");
        }
    })
}  
