window.onload=incio;

function calcular(){
try {
    var num1 = parseInt(document.querySelector("#Num1").value) || 8;
    
    var num2 = parseInt(document.querySelector("#Num2").value) || 8;
    
    var num3 = parseInt(document.querySelector("#Num3").value) || 8;
   
    var num4 = parseInt(document.querySelector("#Num4").value) || 8;
    
    var num5 = parseInt(document.querySelector("#Num5").value) || 8;
    
    var num6 = parseInt(document.querySelector("#Num6").value) || 8;
    
    var num7 = parseInt(document.querySelector("#Num7").value) || 8;
    
    var num8 = parseInt(document.querySelector("#Num8").value) || 8;
    
    var num9 = parseInt(document.querySelector("#Num9").value) || 8;
    
    var num10 = parseInt(document.querySelector("#Num10").value) || 8;
    
    var num11 = parseInt(document.querySelector("#Num11").value) || 8;
    
    var num12 = parseInt(document.querySelector("#Num12").value) || 8;  
    
    var num13 = parseInt(document.querySelector("#Num13").value) || 8;
    
    var num14 = parseInt(document.querySelector("#Num14").value) || 8;
    
    var num15 = parseInt(document.querySelector("#Num15").value) || 8;
    
    var num16 = parseInt(document.querySelector("#Num15").value) || 8;
    
    var num17 = parseInt(document.querySelector("#Num16").value) || 8;
    
    var num18 = parseInt(document.querySelector("#Num17").value) || 8;
    
    var num19 = parseInt(document.querySelector("#Num19").value) || 8;
    
    var num20 = parseInt(document.querySelector("#Num20").value) || 0;
    
    var num21 = parseInt(document.querySelector("#Num21").value) || 0;

    var num22 = parseInt(document.querySelector("#Num22").value) || 0;
    
var suma1 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17 + num18 + num19 + num20 + num21 + num22;

    document.getElementById("resultadoA").value=suma1;
    
} catch (e) {}
}


function calcular2(){
    try{

var nu1 = parseInt(document.querySelector("#Nu1").value) || 3;
var nu2 = parseInt(document.querySelector("#Nu2").value) || 3;
var nu3 = parseInt(document.querySelector("#Nu3").value) || 3;
var nu4 = parseInt(document.querySelector("#Nu4").value) || 3;
var nu5 = parseInt(document.querySelector("#Nu5").value) || 3;
var nu6 = parseInt(document.querySelector("#Nu6").value) || 3;
var nu7 = parseInt(document.querySelector("#Nu7").value) || 3;
var nu8 = parseInt(document.querySelector("#Nu8").value) || 3;
var nu9 = parseInt(document.querySelector("#Nu9").value) || 3;
var nu10 = parseInt(document.querySelector("#Nu10").value) || 3;
var nu11 = parseInt(document.querySelector("#Nu11").value) || 3;
var nu12 = parseInt(document.querySelector("#Nu12").value) || 3;
var nu13 = parseInt(document.querySelector("#Nu13").value) || 3;
var nu14 = parseInt(document.querySelector("#Nu14").value) || 3;
var nu15 = parseInt(document.querySelector("#Nu15").value) || 3;
var nu16 = parseInt(document.querySelector("#Nu16").value) || 3;
var nu17 = parseInt(document.querySelector("#Nu17").value) || 3;
var nu18 = parseInt(document.querySelector("#Nu18").value) || 3;
var nu19 = parseInt(document.querySelector("#Nu19").value) || 3;
var nu20 = parseInt(document.querySelector("#Nu20").value) || 0;
var nu21 = parseInt(document.querySelector("#Nu21").value) || 0;
var nu22 = parseInt(document.querySelector("#Nu22").value) || 0;

var suma2 = nu1 + nu2 + nu3 + nu4 + nu5 + nu6 + nu7 + nu8 + nu9 + nu10 + nu11 + nu12 + nu13 + nu14 + nu15 + nu16 + nu17 + nu18 + nu19 + nu20 + nu21 +nu22;

document.querySelector("#resultadoB").value=suma2;

} catch (error) {}
}