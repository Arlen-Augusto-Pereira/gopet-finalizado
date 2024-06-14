function leiaMais(){
var pontos=document.getElementById("pontos");
var maistexto=document.getElementById("mais");
var botao=document.getElementById("botaojava");

if(pontos.style.display === "none"){
    pontos.style.display="inline";
    maistexto.style.display="none";
    botao.innerHTML="Leia mais";
}else{
 pontos.style.display="none";
 maistexto.style.display="inline";
 botaojava.innerHTML="Leia Menos";
}
}

function leiaMais2(){
var pontos2=document.getElementById("pontos2");
var maistexto=document.getElementById("mais2");
var botaojava2=document.getElementById("botaojava2");

if(pontos2.style.display === "none"){
    pontos2.style.display="inline";
    maistexto.style.display="none";
    botaojava2.innerHTML="Leia mais";
}else{
 pontos2.style.display="none";
 maistexto.style.display="inline";
 botaojava2.innerHTML="Leia Menos"; 
}
}
