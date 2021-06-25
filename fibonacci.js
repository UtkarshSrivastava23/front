var z = prompt("Enter the number of fibonacci digits you want : ");
var a = 0;
var b = 1;
var result = 0;
for (var i= 0; i<= z; i++){
    document.write(result);
    a = b;
    b = result;
    result = a+b ;
    document.write(" ")
}
