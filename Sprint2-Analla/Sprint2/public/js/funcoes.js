 // Aqruivo destinado as funçoes de scripts do Hi-Car

//Script para o slide da Home Page
var slideIndex = 1;
    showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
      x[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " w3-white";
}

//Funcao para inclusao do google.maps na home page
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(-5.8323987, -35.2054445),
    zoom:10,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


 //Função para abrir o dropdown ao clicar no icone especificado 
 function mudarEstado(el1, el2){
    var botao = document.getElementById(el2);
    var div = document.getElementById(el2).style.display;
        if(div == "none"){
            document.getElementById(el2).style.display = 'block';
            document.getElementById(el1).innerHTML='keyboard_arrow_down';
        }
        else{
             document.getElementById(el2).style.display = 'none';
             document.getElementById(el1).innerHTML='keyboard_arrow_right';
        }
}

function alertTransferir() {
}

// Função para incluir mascara nos campos dos formularios
function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
          
    if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    }
}

// Funcoes scripts para caixa de alerta necessaria na pagina Iniciar Servico
function alerta1() {
    alert("Serviço Iniciado!");
}

function alerta2() {
    alert("Os Fechada!");
}

// Funcoes scripts necessarias para pagina mensagem.html
var openInbox = document.getElementById("myBtn");
openInbox.click();

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show"; 
        x.previousElementSibling.className += " w3-red";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-red", "");
    }
}

openMail("Funcionario2")
function openMail(personName) {
    var i;
    var x = document.getElementsByClassName("person");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x = document.getElementsByClassName("test");
    for (i = 0; i < x.length; i++) {
       x[i].className = x[i].className.replace(" w3-light-grey", "");
    }
    document.getElementById(personName).style.display = "block";
    event.currentTarget.className += " w3-light-grey";
}

var openTab = document.getElementById("firstTab");
openTab.click();


// Funcao para preencher barra de progresso usada na pagina servicosativos.ht
function move() {
    var elem = document.getElementById("myBar");   
    var width = 75;
    var id = setInterval(frame, 75);

    var elem = document.getElementById("myBar2");   
    var width = 50;
    var id = setInterval(frame, 50);

    var elem = document.getElementById("myBar3");   
    var width = 25;
    var id = setInterval(frame, 25);

    var elem = document.getElementById("myBar4");   
    var width = 45;
    var id = setInterval(frame, 45);

    var elem = document.getElementById("myBar5");   
    var width = 80;
    var id = setInterval(frame, 80);

    function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++; 
          elem.style.width = width + '%'; 
          elem.innerHTML = width * 1  + '%';
        }
    }
}