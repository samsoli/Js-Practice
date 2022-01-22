alert('welcom to java script');
function personali() {
    var nam = "sama";
    var family = "sol";
    var age = "37";
    alert(nam + " " + family + " " + "age:" + age);

}
var colors = ["blue", "green", "yellow", "red"];//aray
document.write(colors[1]);
document.write(colors.length);

var lbl = document.getElementById("lblResult");
function Sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var sum = num1 + num2;
    lbl.innerHTML = sum;
}
var Name = "sama";
var Family = "sol";
function FullName() {
    return Name + " " + Family;
}
alert(FullName());
document.getElementById("lblResult2").innerHTML = FullName();
