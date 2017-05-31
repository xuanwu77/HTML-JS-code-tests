function getJson(url){
	var promise = new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest();
			xhr.open("GET",url,true);
			xhr.send();

			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						try{
							resolve(xhr.responseText);
						}catch(e){
							reject(e);
						}

					}
				}
			};

	});
	return promise;
}

getJson().then(resp=>console.log(resp));