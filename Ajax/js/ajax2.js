for(var i=0;i<100;i++){
    var request= new XMLHttpRequest()
    request.open('get','../info.txt',false);
    request.send()
    if (request.status===200){
        console.log(request);
        document.write(request.responseText);
    }else{
        console.log('error');
    }
}
