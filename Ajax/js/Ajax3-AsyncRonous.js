var request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
    }else{
        request=new ActiveXObject('microsoft.XMLHTTP');
    }
request.open('get', '../info.txt');
request.onreadystatechange=function()
{
  if( (request.readyState===4) && (request.status===200) )
  {
    console.log(request);
    document.writeln(request.responseText);
    
  }
}


request.send();

