function courseFunction(){
    var txt;
    var course = document.getElementById("courseInput").value;
    switch(course){
        case "html":{
            txt="you need to know English";
            break;
        }
        case "css":{
            txt="you need to know HTML";
            break;
        }
        case "bootstrap":{
            txt="you need to know Css";
            break;
        }
        case "javascript":{
            txt="you need to know HTML ,Css ";
            break;
        }
    }
    document.getElementById("result").innerHTML = txt;
}
