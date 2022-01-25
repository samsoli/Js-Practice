function show(){
    var userInput=document.getElementById("user-input").value;
    var result=document.getElementById("result");
    result.innerHTML = "";
    try{
      if(userInput=="")throw "is empty";
      if(isNaN(userInput))  throw "is not number";
      userInput=Number(userInput);
      if(userInput >90) throw "is too high";
      if(userInput <18) throw "is too low";
    }
    catch(err){
        result.innerHTML="Error:"+err+ "!";
    }
    finally{
        document.getElementById("user-input").value=" "
    }
    
}
    
