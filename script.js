function open_menu(){
  document.getElementById("menue").classList.replace("op-0", "op-1");
  document.getElementById("close").classList.replace("op-0", "op-1");
  document.getElementById("open").classList.replace("op-1", "op-0");
}

function close_menu(){
  document.getElementById("menue").classList.replace("op-1", "op-0");
  document.getElementById("open").classList.replace("op-0", "op-1");
  document.getElementById("close").classList.replace("op-1", "op-0");
}

function dropbtn1() {
  var divElement = document.getElementById("dropbtn1");
  var spanElements = divElement.getElementsByTagName("span");
  var label = divElement.getElementsByTagName("label");
  var label = divElement.getElementsByTagName("button");

  for (var i = 0; i < spanElements.length; i++) {

    if (spanElements[i].classList.contains("mg-top-3")){

      spanElements[i].classList.replace("mg-top-px-3", "mg-top-01");

    }

    if (spanElements[i].classList.contains("op-0")){

      spanElements[i].classList.remove("op-0");
      spanElements[i].classList.add("op-1");
      
      if (i == 0){
        spanElements[i].classList.replace("mg-top-px-01", "mg-top-3");
      }
    
    }
    
    else{
      spanElements[i].classList.remove("op-1");
      spanElements[i].classList.add("op-0");
      spanElements[i].classList.add("top-0");

    }

  }
}

function dropbtn2() {
  var divElement = document.getElementById("dropbtn2");
  var spanElements = divElement.getElementsByTagName("span");
  var label = divElement.getElementsByTagName("label");
  var label = divElement.getElementsByTagName("button");

  for (var i = 0; i < spanElements.length; i++) {

    if (spanElements[i].classList.contains("mg-top-3")){

      spanElements[i].classList.replace("mg-top-px-3", "mg-top-01");

    }

    if (spanElements[i].classList.contains("op-0")){

      spanElements[i].classList.remove("op-0");
      spanElements[i].classList.add("op-1");
      
      if (i == 0){
        spanElements[i].classList.replace("mg-top-px-01", "mg-top-3");
      }
    
    }
    
    else{
      spanElements[i].classList.remove("op-1");
      spanElements[i].classList.add("op-0");
      spanElements[i].classList.add("top-0");

    }

  }
}


document.addEventListener("click", function(event) {

  for (var j = 1; j <= 100; j++) {
  var divElement = document.getElementById("dropbtn" + j);
  var divs = divElement.getElementsByTagName("div");

  var isClickInsideDiv = divElement.contains(event.target);

  if (!isClickInsideDiv) {
    var spanElements = divElement.getElementsByTagName("span");

    for (var i = 0; i < spanElements.length; i++) {

      if (spanElements[i].classList.contains("mg-top-3")){

        spanElements[i].classList.replace("mg-top-px-3", "mg-top-01");
        
      }
      
        spanElements[i].classList.remove("op-1");
        spanElements[i].classList.add("op-0");
        spanElements[i].classList.add("top-0");
            

      };
      
  }
  
}
});

//

for (var j = 1; j <= 100; j++) {
  eval(`
  function dropdown${j}() {
    var divElement = document.getElementById("dropdown${j}");
    var spanElements = divElement.getElementsByTagName("span");
  
    for (var i = 0; i < spanElements.length; i++) {
  
      if (spanElements[i].classList.contains("op-0")){
  
        spanElements[i].classList.remove("op-0");
        spanElements[i].classList.add("op-1");
        
        if (i == 0){
          spanElements[i].classList.replace("mg-top-px-01", "mg-top-3");
        }
      
      }
      
      else{
        spanElements[i].classList.remove("op-1");
        spanElements[i].classList.add("op-0");
        spanElements[i].classList.add("top-0");

      }
  
    }
  }
  `);
}

document.addEventListener("click", function(event) {

  for (var j = 1; j <= 100; j++) {
  var divElement = document.getElementById("dropdown" + j);
  var divs = divElement.getElementsByTagName("div");

  var isClickInsideDiv = divElement.contains(event.target);

  if (!isClickInsideDiv) {
    var spanElements = divElement.getElementsByTagName("span");

    for (var i = 0; i < spanElements.length; i++) {
      
        spanElements[i].classList.remove("op-1");
        spanElements[i].classList.add("op-0");
        spanElements[i].classList.add("top-0");

      };
      
  }
  
}
});

function link1(){

  var link =[]

  for(var i = 1; i < 6; i++){
    link[i] = document.getElementById("link" + i + "");
  }

  for(var i = 1; i < 6; i++){
    link[i].classList.replace("white", "gray7");  
    if (link[i].classList.contains("txt-font-1")){
      link[i].classList.remove("txt-font-1");
    }else if(link[i].classList.contains("txt-font-08")){
      link[i].classList.remove("txt-font-08");
    }else{
      link[i].classList.remove("txt-font-06");
    }
  }

  link[1].classList.replace("gray7", "white");

  link[1].classList.add("txt-font-1");
  link[2].classList.add("txt-font-08");
  link[3].classList.add("txt-font-06");
  link[4].classList.add("txt-font-06");
  link[5].classList.add("txt-font-06");

  var url = link[1].getAttribute("href");
  window.location.href = url;
}


function link2(){

  var link =[]

  for(var i = 1; i < 6; i++){
    link[i] = document.getElementById("link" + i + "");
  }

  for(var i = 1; i < 6; i++){
    link[i].classList.replace("white", "gray7");  
    if (link[i].classList.contains("txt-font-1")){
      link[i].classList.remove("txt-font-1");
    }else if(link[i].classList.contains("txt-font-08")){
      link[i].classList.remove("txt-font-08");
    }else{
      link[i].classList.remove("txt-font-06");
    }
  }

  link[2].classList.replace("gray7", "white");

  link[1].classList.add("txt-font-08");
  link[2].classList.add("txt-font-1");
  link[3].classList.add("txt-font-08");
  link[4].classList.add("txt-font-06");
  link[5].classList.add("txt-font-06");

  var url = link[2].getAttribute("href");
  window.location.href = url;
}


function link3(){

  var link =[]

  for(var i = 1; i < 6; i++){
    link[i] = document.getElementById("link" + i + "");
  }

  for(var i = 1; i < 6; i++){
    link[i].classList.replace("white", "gray7");  
    if (link[i].classList.contains("txt-font-1")){
      link[i].classList.remove("txt-font-1");
    }else if(link[i].classList.contains("txt-font-08")){
      link[i].classList.remove("txt-font-08");
    }else{
      link[i].classList.remove("txt-font-06");
    }
  }

  link[3].classList.replace("gray7", "white");

  link[1].classList.add("txt-font-06");
  link[2].classList.add("txt-font-08");
  link[3].classList.add("txt-font-1");
  link[4].classList.add("txt-font-08");
  link[5].classList.add("txt-font-06");

  var url = link[3].getAttribute("href");
  window.location.href = url;
}

function link4(){

  var link =[]

  for(var i = 1; i < 6; i++){
    link[i] = document.getElementById("link" + i + "");
  }

  for(var i = 1; i < 6; i++){
    link[i].classList.replace("white", "gray7");  
    if (link[i].classList.contains("txt-font-1")){
      link[i].classList.remove("txt-font-1");
    }else if(link[i].classList.contains("txt-font-08")){
      link[i].classList.remove("txt-font-08");
    }else{
      link[i].classList.remove("txt-font-06");
    }
  }

  link[4].classList.replace("gray7", "white");

  link[1].classList.add("txt-font-06");
  link[2].classList.add("txt-font-06");
  link[3].classList.add("txt-font-08");
  link[4].classList.add("txt-font-1");
  link[5].classList.add("txt-font-08");

  var url = link[4].getAttribute("href");
  window.location.href = url;
}

function link5(){

  var link =[]

  for(var i = 1; i < 6; i++){
    link[i] = document.getElementById("link" + i + "");
  }

  for(var i = 1; i < 6; i++){
    link[i].classList.replace("white", "gray7");  
    if (link[i].classList.contains("txt-font-1")){
      link[i].classList.remove("txt-font-1");
    }else if(link[i].classList.contains("txt-font-08")){
      link[i].classList.remove("txt-font-08");
    }else{
      link[i].classList.remove("txt-font-06");
    }
  }

  link[5].classList.replace("gray7", "white");

  link[1].classList.add("txt-font-06");
  link[2].classList.add("txt-font-06");
  link[3].classList.add("txt-font-06");
  link[4].classList.add("txt-font-08");
  link[5].classList.add("txt-font-1");

  var url = link[5].getAttribute("href");
  window.location.href = url;
}


function link_left(){

  var link =[]

  for(var i = 1; i < 6; i++){
    link[i] = document.getElementById("link" + i + "");
  }

  if (link[5].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[4].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-06");
    link[2].classList.add("txt-font-06");
    link[3].classList.add("txt-font-08");
    link[4].classList.add("txt-font-1");
    link[5].classList.add("txt-font-08");

    var url = link[4].getAttribute("href");
    window.location.href = url;
    
  } else

  if (link[4].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[3].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-06");
    link[2].classList.add("txt-font-08");
    link[3].classList.add("txt-font-1");
    link[4].classList.add("txt-font-08");
    link[5].classList.add("txt-font-06");

    var url = link[3].getAttribute("href");
    window.location.href = url;
    
  } else

  if (link[3].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[2].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-08");
    link[2].classList.add("txt-font-1");
    link[3].classList.add("txt-font-08");
    link[4].classList.add("txt-font-06");
    link[5].classList.add("txt-font-06");

    var url = link[2].getAttribute("href");
    window.location.href = url;

  } else

  if (link[2].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[1].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-1");
    link[2].classList.add("txt-font-08");
    link[3].classList.add("txt-font-06");
    link[4].classList.add("txt-font-06");
    link[5].classList.add("txt-font-06");

    var url = link[1].getAttribute("href");
    window.location.href = url;
    
  } else

  if (link[1].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[5].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-06");
    link[2].classList.add("txt-font-06");
    link[3].classList.add("txt-font-06");
    link[4].classList.add("txt-font-08");
    link[5].classList.add("txt-font-1");

    var url = link[5].getAttribute("href");
    window.location.href = url;
    
  }



}

function link_right(){

  var link =[]

  for(var i = 1; i < 6; i++){
    link[i] = document.getElementById("link" + i + "");
  }

  if (link[1].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[2].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-08");
    link[2].classList.add("txt-font-1");
    link[3].classList.add("txt-font-08");
    link[4].classList.add("txt-font-06");
    link[5].classList.add("txt-font-06");

    var url = link[2].getAttribute("href");
    window.location.href = url;
    
  } else

  if (link[2].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[3].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-06");
    link[2].classList.add("txt-font-08");
    link[3].classList.add("txt-font-1");
    link[4].classList.add("txt-font-08");
    link[5].classList.add("txt-font-06");

    var url = link[3].getAttribute("href");
    window.location.href = url;
    
  } else

  if (link[3].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[4].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-06");
    link[2].classList.add("txt-font-06");
    link[3].classList.add("txt-font-08");
    link[4].classList.add("txt-font-1");
    link[5].classList.add("txt-font-08");

    var url = link[4].getAttribute("href");
    window.location.href = url;
    
  } else

  if (link[4].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[5].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-06");
    link[2].classList.add("txt-font-06");
    link[3].classList.add("txt-font-06");
    link[4].classList.add("txt-font-08");
    link[5].classList.add("txt-font-1");

    var url = link[5].getAttribute("href");
    window.location.href = url;
    
  } else

  if (link[5].classList.contains("txt-font-1")){

    for(var i = 1; i < 6; i++){
      link[i].classList.replace("white", "gray7");  
      if (link[i].classList.contains("txt-font-1")){
        link[i].classList.remove("txt-font-1");
      }else if(link[i].classList.contains("txt-font-08")){
        link[i].classList.remove("txt-font-08");
      }else{
        link[i].classList.remove("txt-font-06");
      }
    }

    link[1].classList.replace("gray7", "white");

    link[1].classList.add("txt-font-1");
    link[2].classList.add("txt-font-08");
    link[3].classList.add("txt-font-06");
    link[4].classList.add("txt-font-06");
    link[5].classList.add("txt-font-06");

    var url = link[1].getAttribute("href");
    window.location.href = url;
    
  }

}


function search_style_hover(){
  document.getElementById("svg_search").classList.replace("left-full-48", "left-full-33");
  document.getElementById("searchy-input").classList.replace("bg-transparent", "bg-white");
}

function check_search_style_hover(){
  var inputElement = document.getElementById("searchy-input");

  if (inputElement.value !== '') {
    console.log('Value required!');
  
  } else {
    document.getElementById("svg_search").classList.replace("left-full-33", "left-full-48");
    document.getElementById("searchy-input").classList.replace("bg-white", "bg-transparent");
  }
}


function search_style_hover2(){
  document.getElementById("svg_search").classList.replace("left-full-48", "left-full-59");
  document.getElementById("svg_search").classList.replace("max-z-index", "master-z-index");
  document.getElementById("svg_search").classList.replace("white", "black");
  document.getElementById("searchy-input").classList.replace("bg-transparent", "bg-white");
}

function check_search_style_hover2(){
  var inputElement = document.getElementById("searchy-input");

  if (inputElement.value !== '') {
    console.log('Value required!');
  
  } else {
    document.getElementById("svg_search").classList.replace("left-full-59", "left-full-48");
    document.getElementById("svg_search").classList.replace("black", "white");
    document.getElementById("svg_search").classList.replace("master-z-index", "max-z-index");
    document.getElementById("searchy-input").classList.replace("bg-white", "bg-transparent");
  }
}

function search_style_hover_black(){
  document.getElementById("svg_search").classList.replace("left-full-48", "left-full-33");
  document.getElementById("searchy-input").classList.replace("bg-transparent", "bg-dark-gray");
}

function check_search_style_hover_black(){
  var inputElement = document.getElementById("searchy-input");

  if (inputElement.value !== '') {
    console.log('Value required!');
  
  } else {
    document.getElementById("svg_search").classList.replace("left-full-33", "left-full-48");
    document.getElementById("searchy-input").classList.replace("bg-dark-gray", "bg-transparent");
  }
}



function copiado1(){

  let btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
  let copie = document.querySelector('.docs');
  copie.select();
  document.execCommand('copy');
  alert("copiadomeuamigo")
});

    document.getElementById("copiado1").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-1" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>';

    setTimeout(function() {
        document.getElementById("copiado1").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-1" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'
      }, 3000)
}

function copiado2(){

  document.getElementById("copiado2").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-1" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>';

  setTimeout(function() {
      document.getElementById("copiado2").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-1" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'
    }, 3000)
}

function copiado3(){

  document.getElementById("copiado3").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-1" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>';

  setTimeout(function() {
      document.getElementById("copiado3").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-1" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'
    }, 3000)
}

 var searchInput = document.getElementById("search-input");
    var searchResults = document.getElementById("search-results").children;
   
    searchInput.addEventListener("input", function() {
      var query = searchInput.value.trim();
      if (query === "") {
        showOptions(searchResults);
      } else {
        showOptions(filterOptions(query));
      }
    });
   
    function filterOptions(query) {
      var filteredOptions = [];
      for (var i = 0; i < searchResults.length; i++) {
        var option = searchResults[i].textContent;
        if (option.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          filteredOptions.push(searchResults[i]);
        }
      }
      return filteredOptions;
    }
   
    function showOptions(options) {
      for (var i = 0; i < searchResults.length; i++) {
        searchResults[i].style.display = "none";
      }
      if (options.length === 0) {
        var n = document.getElementById("n");
        n.style.display = 'block';
      } else {
        for (var i = 0; i < options.length; i++) {
          options[i].style.display = "block";
        }
        var n = document.getElementById("n");
        n.style.display = 'none';
      }
    }
    
    showOptions(searchResults); // Exibir todas as opções inicialmente

function copy1(){

  let copiar = document.getElementById("copiar");
  let copied = document.getElementById("copied");

  copiar.classList.replace("op-1", "op-0")
  copied.classList.replace("op-0", "op-1")

  var paragrafo = document.getElementById('copiar1');
  var textoCopiado = paragrafo.textContent;
  var textarea = document.createElement('textarea');

  textarea.value = textoCopiado;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  setTimeout(function() {
    copied.classList.replace("op-1", "op-0")
    copiar.classList.replace("op-0", "op-1")
  }, 3000)

}


function change1(){
  var change = document.getElementById('option1');
  change.classList.replace("link", "linked")
}
function change2(){
  var change = document.getElementById('option2');
  change.classList.replace("link", "linked")
}
function change3(){
  var change = document.getElementById('option3');
  change.classList.replace("link", "linked")
}
function change4(){
  var change = document.getElementById('option4');
  change.classList.replace("link", "linked")
}
function change5(){
  var change = document.getElementById('option5');
  change.classList.replace("link", "linked")
}
function change6(){
  var change = document.getElementById('option6');
  change.classList.replace("link", "linked")
}
function change7(){
  var change = document.getElementById('option7');
  change.classList.replace("link", "linked")
}