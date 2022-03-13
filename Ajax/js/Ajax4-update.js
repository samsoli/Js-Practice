var request=new XMLHttpRequest();
request.open('get','../info.txt');
request.onreadystatechange = function(){
if (request.readyState===4 && request.status===200){
  console.log(request)
  var modify=document.getElementById('update');
  modify.innerHTML= request.responseText;
}
}
request.send()
