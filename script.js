//Comparison Operator
function compare(){
    let x;
    let y;
    let result;
    x=Number(document.getElementById('num1').value);
    y=Number(document.getElementById('num2').value);
    result=x>y;
    document.getElementById('result1').innerHTML=" 1) "+ x + " > "+ y+ " = "+ result;
    result=x<y;
    document.getElementById('result2').innerHTML="2) "+ x + " < "+ y+ " = "+ result;
    result=x>=y;
    document.getElementById('result3').innerHTML="3) "+ x + " >= "+ y+ " = "+ result;
    result=x<=y;
    document.getElementById('result4').innerHTML="4) "+ x + " <= "+ y+ " = "+ result;
    result=x==y;
    document.getElementById('result5').innerHTML="5) "+ x + " == "+ y+ " = "+ result;
    result=x!=y;
    document.getElementById('result6').innerHTML="6) "+ x + " != "+ y+ " = "+ result;
    result=x===y;
    document.getElementById('result7').innerHTML="7) "+ x + " === "+ y+ " = "+ result;
    result=x!==y;
    document.getElementById('result8').innerHTML="8) "+ x + " !== "+ y+ " = "+ result;
}
//Assignment Operator
let x=0;
function assignment(){
    x=Number(document.getElementById('enterValue').value);
    showResult();
}
function addAssignment(){
    x+=Number(document.getElementById('enterValue').value);
    showResult();
}
function subAssignment(){
    x-=Number(document.getElementById('enterValue').value);
    showResult();
}
function multiAssignment(){
    x*=Number(document.getElementById('enterValue').value);
    showResult();
}
function divAssignment(){
    x/=Number(document.getElementById('enterValue').value);
    showResult();
}
function showResult(){
    document.getElementById('result').innerHTML="Updated Value:" + x;
}
//Arithmetic Operator
function add(){
    let x=Number(document.getElementById('firstValue').value);
    let y=Number(document.getElementById('secondValue').value);
    let result;
    result=x + y;
    document.getElementById('res').innerHTML="Addition: "+ result;
}
function sub(){
    let x=Number(document.getElementById('firstValue').value);
    let y=Number(document.getElementById('secondValue').value);
    let result;
    result=x - y;
    document.getElementById('res').innerHTML="Subtraction: "+ result;
}
function multi(){
    let x=Number(document.getElementById('firstValue').value);
    let y=Number(document.getElementById('secondValue').value);
    let result;
    result=x * y;
    document.getElementById('res').innerHTML="Multiplication: "+ result;
}
function divi(){
    let x=Number(document.getElementById('firstValue').value);
    let y=Number(document.getElementById('secondValue').value);
    let result;
    result=x / y;
    document.getElementById('res').innerHTML="Division: "+ result;
}
function exp(){
    let x=Number(document.getElementById('firstValue').value);
    let y=Number(document.getElementById('secondValue').value);
    let result;
    result=x**y;
    document.getElementById('res').innerHTML="Exponentiation: "+ result;
}
function mod(){
    let x=Number(document.getElementById('firstValue').value);
    let y=Number(document.getElementById('secondValue').value);
    let result;
    result=x % y;
    document.getElementById('res').innerHTML="Modulus: "+ result;
}