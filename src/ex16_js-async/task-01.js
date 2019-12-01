function myFetch(url,option={method:"GET"}){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(option.method,url);
        xhr.send();
        xhr.ontimeout = function(){
            reject("failed");
        }
        if(xhr.status!==200){
            reject(xhr.response);
        }
        else{
            resolve(JSON.parse(xhr.responseText)); 
        }    
    })
}  
